<?php

namespace Admin\Controllers\Public;

use App\Http\Controllers\Controller;
use Publics\Controllers\Tools as Convert;
use Models\Edu\LessonChangeLog;
use Models\Edu\Tools;
use Models\Edu\Lesson;
use Models\Edu\ToolsChild;
use Publics\Controllers\Tools as PubTools;
class Logs extends Controller
{
    /**
     * if in Form edit Lesson,Tools in panel NGO & Panel
     */
    public static function createLessonChangeLOg($creator, $lesson_id, $record_id="0", $tools_child_id="0")
    {
        $create_array = [
            'lesson_id' => $lesson_id,
            'record_id' => $record_id,
            'tools_child_id' => $tools_child_id,
            'change_url' => request()->change_url,
            'creator_user_id' => $creator,
            'check_change' => 0,
        ];
        $create_log = LessonChangeLog::create($create_array);
        self::updateNotCheckedCount($lesson_id);
    }
    /**
     * if in Form edit Lesson,Tools in panel Manege
     */
    public static function checkLessonChangeLog($checker, $lesson_id, $record_id="0", $tools_child_id="0")
    {
        $update_array = [
            'checker_user_id' => $checker,
            'check_change' => 1,
        ];
        $check_log = LessonChangeLog::where("lesson_id", $lesson_id)
            ->where("record_id", $record_id)
            ->where("tools_child_id", $tools_child_id)
            ->where("check_change", "0")
            ->update($update_array)
        ;
        self::updateNotCheckedCount($lesson_id);
    }
    /**
     * Update field not_checked_count of tables edu_lessons For a lesson
     */
    public static function updateNotCheckedCount($lesson_id)
     {
        \DB::update("UPDATE edu_lessons SET `not_checked_count` =
                (SELECT count(edu_lesson_change_log.lesson_id) FROM edu_lesson_change_log WHERE edu_lesson_change_log.lesson_id = edu_lessons.id AND edu_lesson_change_log.check_change =0)
                WHERE edu_lessons.id = $lesson_id");    
        // \DB::update("UPDATE edu_lessons SET `not_checked_count` =
        //         (SELECT count(edu_lesson_change_log.lesson_id) FROM edu_lesson_change_log WHERE edu_lesson_change_log.lesson_id = edu_lessons.id AND edu_lesson_change_log.check_change =0)");    
    }
    public function list($lessonId)
    {
        $items = [];
        $toolsChilds = ToolsChild::all();
        $logs = LessonChangeLog::where("lesson_id", $lessonId)
            ->where("check_change", 0)
            ->with("toolsChild","creatorUser")
            ->get()
        ;

        foreach($logs as $log)
        {
            Convert::convertDateTime($log, 'created_at', 'created', '', '');

            if($log->tools_child_id == 0)
            {
                if(!isset($items['lesson']))
                {
                    $items['lesson'] = [];
                }
                $object = Lesson::find($log->lesson_id);
                $log['record'] = $object;
                $items['lesson'][] = $log;
            }
            else
            {
                foreach($toolsChilds as $child)
                {
                    if($log->tools_child_id  == $child->id)
                    {
                        if(!isset($items[$child->table]))
                        {
                            $items[$child->table] = [];
                        }
                        $object = \App::make($log->toolsChild->model);
                        $object = $object->find($log->record_id);
                        $log['record'] = $object;
                        $items[$child->table][] = $log;
                        break;
                    }
                }
            }
        }

        return \Response::json($items);
    }
}
