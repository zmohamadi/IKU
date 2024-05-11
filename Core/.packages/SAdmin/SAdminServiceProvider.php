<?php

namespace Sadmin;

use Illuminate\Support\ServiceProvider;

class SadminServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $path = __DIR__."/langs";
        str_replace('/', DIRECTORY_SEPARATOR, $path);
        $this->loadTranslationsFrom($path , "SAdminLang");
        
        // $this->app['router']->aliasMiddleware('InertiaShare', \Admin\Middlewares\InertiaShare::class);
    }

    public function register(){}

}
