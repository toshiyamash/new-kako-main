// ドキュメントの読み込みが完了した時に実行される関数
document.addEventListener("DOMContentLoaded", function() {
    // クリックイベントをリスニングする対象の要素を取得
    var tabListItems = document.querySelectorAll('.tab-list-item');
    var tabContents = document.querySelectorAll('.tab-contents');
    
    // 各タブリストアイテムにクリックイベントを追加
    tabListItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // クリックされたアイテムのインデックスを取得
            var clickedIndex = Array.from(tabListItems).indexOf(this);
            
            // すべてのタブリストアイテムから 'is-btn-active' クラスを削除
            tabListItems.forEach(function(tabItem) {
                tabItem.classList.remove('is-btn-active');
            });
            
            // クリックされたタブリストアイテムに 'is-btn-active' クラスを追加
            this.classList.add('is-btn-active');
            
            // すべてのタブコンテンツから 'is-contents-active' クラスを削除
            tabContents.forEach(function(tabContent) {
                tabContent.classList.remove('is-contents-active');
            });
            
            // クリックされたタブに対応するタブコンテンツに 'is-contents-active' クラスを追加
            tabContents[clickedIndex].classList.add('is-contents-active');
        });
    });
});


// このJavaScriptコードは、提供されたjQueryコードの機能を保持しています。各タブリストアイテムと
// タブコンテンツに対してクリックイベントリスナーを追加し、クリックされたアイテムにクラスを追加/削
// 除して、タブの表示を切り替えています。また、Array.from() メソッドを使用してクリックされたアイテ
// ムのインデックスを取得しています。（2023.09.16 ChatGPT）