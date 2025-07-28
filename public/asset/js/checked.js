function checkedUrl(selector) {
  let cnt = 0;
  const maxTries = 3; // 最大試行回数
  const intervalTime = 1000; // 1秒ごとに繰り返す

  // bodyタグを取得
  let bodyElement = document.body;
  let idName = bodyElement.id;

  // "checked"が含まれている場合は削除
  if (idName) {
    idName = idName.replace("checked", "");
  }

  // 繰り返し処理
  const intervalId = setInterval(() => {
    cnt++;

    // querySelectorAllを使用してリンク要素を全て取得
    const linkElements = document.querySelectorAll(`${selector}`);
    // console.log(`Attempt ${cnt}:`, linkElements);

    // linkElements が取得できた場合（要素が1つ以上ある場合）
    if (linkElements.length > 0 && idName) {
      // それぞれのリンク要素に対して処理
      linkElements.forEach((linkElement) => {
        // 既にパラメーターが含まれていない場合に追加
        if (!linkElement.href.includes(`?checked=${idName}`)) {
          linkElement.href += `?checked=${idName}`;
        }
      });
      clearInterval(intervalId); // 成功したら繰り返しを停止
    }

    // 最大試行回数に達した場合
    if (cnt >= maxTries) {
      clearInterval(intervalId); // 繰り返しを停止
      console.log(
        "最大試行回数に達しました。linkElementsを取得できませんでした。"
      );
    }
  }, intervalTime); // 1秒ごとにチェック
}

export { checkedUrl };
