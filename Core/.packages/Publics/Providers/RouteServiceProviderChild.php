<?php

namespace Publics\Providers;

// use Illuminate\Support\ServiceProvider;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProviderChild extends RouteServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    protected $namespace='';

    public function boot(): void
    {
        $this->routes(function () {
            $this->map();
        });
    }

    public function map()
    {
        $this->mapAdminRoutes();
        $this->mapApiRoutes();
        $this->mapSAdminRoutes();
    }

    protected function mapAdminRoutes()
    {
        Route::prefix('mastership')
            ->middleware('admin')
            ->namespace($this->namespace."Admin\Controllers")
            ->group(__DIR__ . '/../../Admin/routes.php');
    }
    protected function mapApiRoutes()
    {
        Route::prefix('mastership')
            ->middleware('admin')
            ->namespace($this->namespace."Api\Controllers")
            ->group(__DIR__ . '/../../Api/routes.php');
    }

    protected function mapSAdminRoutes()
    {
        Route::prefix('SAdmin')
            ->middleware('admin')
            ->namespace($this->namespace."SAdmin\Controllers")
            ->group(__DIR__ . '/../../SAdmin/routes.php');
    }

}
