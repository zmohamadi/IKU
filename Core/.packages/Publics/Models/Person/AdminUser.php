<?php
namespace Models\Person;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Models\Traits\Base;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;

class AdminUser extends Authenticatable
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at', 'password'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'person_admin_users';

    // public function newQuery($excludeDeleted = true)
    // {
    //     return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    // }

    public function role()
    {
        return $this->belongsTo(\Models\ACL\Role::class, 'role_id');
    }
    // public function creatorBlogs()
    // {
    //     return $this->hasMany(\Models\Content\Blog::class, "creator_user_id");
    // }
    // public function editorBlogs()
    // {
    //     return $this->hasMany(\Models\Content\Blog::class, "editor_user_id");
    // }
}
