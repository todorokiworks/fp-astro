// モーダル表示制御
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('popup-modal-taxation');
    const closeButton = document.querySelector('.popup-modal-close');

    if (!modal || !closeButton) {
        return;
    }

    // セッション使用フラグ（true: セッション使用、false: セッション不使用）
    const USE_SESSION = true;

    // セッションストレージのキー
    const MODAL_HIDDEN_KEY = 'popup-modal-taxation-hidden';
    const MODAL_HIDDEN_TIME = 24 * 60 * 60 * 1000; // 24時間（ミリ秒）

    // モーダルを非表示にする
    function hideModal() {
        modal.style.display = 'none';

        // セッション使用フラグがtrueの場合のみセッションストレージに保存
        if (USE_SESSION) {
            const hiddenTime = Date.now();
            sessionStorage.setItem(MODAL_HIDDEN_KEY, hiddenTime.toString());
        }
    }

    // モーダルを表示する
    function showModal() {
        modal.style.display = 'flex';
    }

    // モーダルの表示状態をチェック
    function checkModalVisibility() {
        // セッション使用フラグがfalseの場合は常に表示
        if (!USE_SESSION) {
            showModal();
            return;
        }

        const hiddenTime = sessionStorage.getItem(MODAL_HIDDEN_KEY);

        if (hiddenTime) {
            const timeDiff = Date.now() - parseInt(hiddenTime);

            // 24時間経過していない場合は非表示のまま
            if (timeDiff < MODAL_HIDDEN_TIME) {
                hideModal();
                return;
            } else {
                // 24時間経過した場合はセッションストレージから削除
                sessionStorage.removeItem(MODAL_HIDDEN_KEY);
            }
        }

        // 表示条件を満たしている場合は表示
        showModal();
    }

    // 閉じるボタンのクリックイベント
    closeButton.addEventListener('click', function (e) {
        e.preventDefault();
        hideModal();
    });

    // オーバーレイのクリックイベント（オプション）
    const overlay = modal.querySelector('.popup-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                hideModal();
            }
        });
    }

    // 初期表示時のチェック
    checkModalVisibility();
});
