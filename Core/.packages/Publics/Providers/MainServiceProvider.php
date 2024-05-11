<?php

namespace Publics\Providers;

use Illuminate\Support\ServiceProvider;

class MainServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {        
        $this->app->register('Publics\Providers\RouteServiceProviderChild');
        $this->app->register('Admin\AdminServiceProvider');

        $router = $this->app['router'];
        $router->aliasMiddleware('Lang', \Publics\Middlewares\Lang::class);
    }
}
