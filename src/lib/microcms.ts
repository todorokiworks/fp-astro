import { createClient } from 'microcms-js-sdk';

// 環境変数の検証
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
    console.error('microCMSの環境変数が設定されていません。');
    console.error('MICROCMS_SERVICE_DOMAIN:', serviceDomain ? '設定済み' : '未設定');
    console.error('MICROCMS_API_KEY:', apiKey ? '設定済み' : '未設定');
}

// microCMSクライアントの作成
export const client = createClient({
    serviceDomain: serviceDomain || '',
    apiKey: apiKey || '',
});

// お知らせの型定義
export interface News {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    updatedAt: string;
    slug?: string;
}

// 最新のお知らせを取得（トップページ用）
export async function getLatestNews(limit: number = 5): Promise<News[]> {
    try {
        const data = await client.getList({
            endpoint: 'news',
            queries: {
                limit: limit,
                orders: '-publishedAt',
            },
        });
        return data.contents;
    } catch (error) {
        console.error('Error fetching latest news:', error);
        return [];
    }
}

// 全てのお知らせを取得（一覧ページ用）
export async function getAllNews(limit: number = 20, offset: number = 0): Promise<{
    contents: News[];
    totalCount: number;
}> {
    try {
        const data = await client.getList({
            endpoint: 'news',
            queries: {
                limit: limit,
                offset: offset,
                orders: '-publishedAt',
            },
        });
        return {
            contents: data.contents,
            totalCount: data.totalCount,
        };
    } catch (error) {
        console.error('Error fetching all news:', error);
        return {
            contents: [],
            totalCount: 0,
        };
    }
}

// 特定のお知らせを取得（詳細ページ用）
export async function getNewsById(id: string): Promise<News | null> {
    try {
        const data = await client.getListDetail({
            endpoint: 'news',
            contentId: id,
        });
        return data;
    } catch (error) {
        console.error('Error fetching news by id:', error);
        return null;
    }
}

// スラグでお知らせを取得（詳細ページ用）
export async function getNewsBySlug(slug: string): Promise<News | null> {
    try {
        const data = await client.getList({
            endpoint: 'news',
            queries: {
                filters: `slug[equals]${slug}`,
                limit: 1,
            },
        });
        return data.contents[0] || null;
    } catch (error) {
        console.error('Error fetching news by slug:', error);
        return null;
    }
} 