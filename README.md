
# Setup
```
npm i
composer install
```
create an .env file
```
php artisan key:generate
```
```
php artisan serve
yarn watch
```
```
http://127.0.0.1:8000/
```

## Creation and Connection of chosen database to sekou template

**Configure .env file.**

- DB_CONNECTION=mysql
- DB_HOST=
- DB_PORT=
- DB_DATABASE=
- DB_USERNAME=
- DB_PASSWORD=

**Create your model,controller and migration file for types and details**

- php artisan make:model SekouDetails -mcr
- php artisan make:model SekouTypes -mcr

**Configure migration file**

`for types`

- $table->id();
- $table->string('sekuType');
- $table->timestamps();

`for details`

- $table->id();
- $table->integer('detailId');
- $table->integer('imageID')->default(0);
- $table->string('sekuType');
- $table->string('name');
- $table->integer('pages')->default(0);
- $table->timestamps();

**run `php artisan migrate`.**

**set `created_at` default value into `CURRENT_TIMESTAMP`.**

**Insert your Data (extracted sql files).**

## Deployment

- git clone git-----
- npm install
- composer install
- php artisan storage:link

`after changes`
- php artisan optimize
- yarn dev

