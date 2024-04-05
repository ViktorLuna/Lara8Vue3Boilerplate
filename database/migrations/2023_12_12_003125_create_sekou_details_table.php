<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSekouDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sekou_details', function (Blueprint $table) {
            $table->id();
            $table->integer('detailId');
            $table->integer('imageID')->default(0);
            $table->string('sekuType');
            $table->string('name');
            $table->integer('pages')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sekou_details');
    }
}
