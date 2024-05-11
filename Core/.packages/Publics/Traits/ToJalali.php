<?php
/**
 * Created by PhpStorm.
 * User: Mahdi
 * Date: 7/20/2017
 * Time: 10:54 AM
 */

namespace KBK\Publics\Traits;

// use \Morilog\Jalali\Jalalian;
// use \Morilog\Jalali\Jalalian;
use \Morilog\Jalali\Jalalian;

use \App;


trait ToJalali
{
    public function getUpdatedAtAttribute($value)
    {
        // dd($value);
        //return Jalalian::forge($value)->format('%B %d، %Y');
        // dd(App::getLocale());
        if(App::getLocale() == "fa")
        // return Jalalian::convertNumbers(Jalalian::forge($value)->format('%A - %d %B، %Y - H:i:s'));
        // return $this->convertNumbers(Jalalian::forge($value)->format('%B %d، %Y - H:i:s'));
        return $this->convertNumbers(Jalalian::forge($value)->format('%A - %d %B، %Y - H:i:s'));
        //return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));
    else
        return Jalalian::forge($value)->format('%C-%Y');
        // return strftime("%C-%Y", \Carbon::now()->timezone('Europe/London')->toTime());
        // return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));
    }

    public function getCreatedAtAttribute($value)
    {
        //return Jalalian::convertNumbers(Jalalian::forge($value)->reforge('last monday')->format('%d %B، %Y - H:i:s'));
        if(App::getLocale() == "fa")
            return $this->convertNumbers(Jalalian::forge($value)->format('%A - %d %B، %Y - H:i:s'));
            //return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));
        else
            return Jalalian::forge($value)->format('%C-%Y');
            // return strftime("%C-%Y", \Carbon::now()->timezone('Europe/London')->toTime());
            //return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));

    }

    public function getDeletedAtAttribute($value)
    {
        //return Jalalian::forge($value)->format('%b %e، %Y');
        if(App::getLocale() == "fa")
        return $this->convertNumbers(Jalalian::forge($value)->format('%A - %d %B، %Y - H:i:s'));
        //return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));
    else
        return Jalalian::forge($value)->format('%C-%Y');
        // return strftime("%C-%Y", \Carbon::now()->timezone('Europe/London')->toTime());
        //return Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y-%m-%d'));
    }
    public function Dbformat($value)
    {

        if(App::getLocale() == "fa" && $value != "0000-00-00")
        {
            $g = explode('/',$value);
            dd(Jalalian::toGregorian($g[0],$g[1],$g[2]));
            $mdate = implode('-',Jalalian::toGregorian($g[0],$g[1],$g[2]));
            return $mdate;
        }
        else
        return $value;

    }
    public function Showformat($value)
    {
        //return $value;
        if(App::getLocale() == "fa" && $value != "0000-00-00")
        {
            //if()
            //dd(Jalalian::convertNumbers(Jalalian::forge($value)->format('%Y/%m/%d')));
            return $this->convertNumbers(Jalalian::forge($value)->format('%Y/%m/%d'));
        }
        else
        return $value;
    }

    public static function convertNumbers($string)
    {
        $farsi_array = array("۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹");
        $english_array = array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

        return str_replace($english_array, $farsi_array, $string);
    }
}
