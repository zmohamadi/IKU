<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Http\Middleware\TrustProxies as Middleware;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string|null
     */
    protected $proxies = '*'; // تمام پروکسی‌ها را اعتماد می‌کنیم، شما می‌توانید بر اساس نیاز خود تنظیمات خودتان را انجام دهید

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = 0b00000100; // معادل با HEADER_X_FORWARDED_ALL در نسخه‌های جدید Laravel

    // ...
}
