<?php
namespace Models\Edu\Meet;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class ArchiveFile extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'meeting_archive_files';

    function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }


}
