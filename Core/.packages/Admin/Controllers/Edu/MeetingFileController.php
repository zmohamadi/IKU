<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Person\Student;
use Models\Edu\Meet\Persence;
use Models\Edu\Meet\ArchiveFile;

class MeetingFileController extends BaseAbstract{

    protected $model = "Models\Edu\Meet\ArchiveFile";
    protected $request = "Publics\Requests\Edu\Tools\MeetingFileRequest";

}
