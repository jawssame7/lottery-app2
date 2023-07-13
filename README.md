## 開発環境構築
### 環境作成時に以下が必要
- PHP 8 以上
- composer 2.5.8 以上 https://getcomposer.org/

### 実行環境
- Laravel Sail
- React
- vite
- Inertia
``` bash
./vendor/bin/sail up
```
``` bash
./vendor/bin/sail npm install
```
## 開発時
``` bash
./vendor/bin/sail up
```
``` bash
./vendor/bin/sail npm run dev
```

### Tips
`./vendor/bin/sail npm run dev`でうまく動かないときは以下で

``` bash
docker exec -it <sailのコンテナ名> bash
npm run dev
```
