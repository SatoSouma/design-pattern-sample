# Singleton pattern とは
- そのインスタンスがプログラム上において、必ず一個しかないと保証する事のできるデザインパターン
- プログラマがどう頑張っても一つのインスタンスしか生成されないので、必ず同一のインスタンスとなる

## プログラム解説
- Singleton クラスの中で Singleton のインスタンスをもコンストラクタも private修飾子を付けて作成しているので他のプログラムから参照することは出来ない、つまりは new して外部でインスタンスを作成することは出来ないので、ただ一つのインスタンスが Singletonクラスの中で存在することになる。
