import Vue from "vue";
//ダイアログのコンポーネントを読み込む
import dialogComponent from "./dialogComponent";
//dialogComponentを継承したDialogを作成
const Dialog = Vue.extend(dialogComponent);
export default class {
  //Vue.use(xxx)したときにここが実行される
  static install() {
    //Vue自体に新しいメソッドを追加する
    Vue.mixin({
      methods: {
        //$dialogというメソッドを追加
        $dialog: () => {
          //ダイアログのインスタンス
          let instance;
          //ダイアログを開くメソッド
          const open = (message) => {
            //閉じたらPromiseを返すようにする
            return new Promise((resolve) => {
              //空のDOMを用意する -> $mountを対象の要素を置き換えてしまうので空のDOMを用意する
              const div = document.createElement("div");
              const parent = document.getElementById("dialog");
              parent.appendChild(div);

              //閉じるときにインスタンスを廃棄
              const destroy = () => {
                instance.$destroy();
                instance = null;
                parent.removeChild(parent.firstChild);
              };

              //ダイアログのインスタンスを作成
              instance = new Dialog({
                //propsに関数を渡す
                propsData: {
                  success: () => {
                    destroy();
                    resolve(true);
                  },
                  failure: () => {
                    destroy();
                    resolve(false);
                  }
                }
              });

              //スロットにメッセージを追加
              instance.$slots.default = [message];
              //空のdivにマウント
              instance.$mount(div);
            });
          };
          return {
            open
          };
        }
      }
    });
  }
}
