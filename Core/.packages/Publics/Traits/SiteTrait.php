<?php

namespace KBK\Publics\Traits;


trait SiteTrait
{
    private $modules;
    
    public function makeObj($controller)
    {
        //$name = "\Api\Site\Lara\Controllers\".$controller;
        $object = app("\Api\Site\Lara\Controllers\\".$controller);
        return $object;
    }
    public function makeModelObj($class)
    {
        //$name = "\Api\Site\Lara\Controllers\".$controller;
        $object = app("\Api\Admin\Lara\Models\\".$class);
        return $object;
    }

    public function addModule($function, $controller="", $params = null){
        $this->modules[] = ['func'=>$function, "ctrl"=>$controller, 'params'=>$params];
    }

    public function view($path){
        //dd("545");
        $view = view($path);
        if($this->modules)
        foreach($this->modules as $mod){
            $func = $mod['func'];
            $params = $mod['params'];
            $modName = 'function'.rand(10000, 50000); 
            //echo $modName;
            if($mod['ctrl'] == "")
            {              
                
                if($params != ""){
                    $p = "'".implode("','",$params)."'";
                    $order = '$$modName = $this->$func('.$p.');';
                    eval($order);
                }
                else{
                    $$modName = $this->$func();
                }
            }
            else{
                //$$modName = call_user_method_array($func, $this->makeObj($mod['ctrl']), $params);
                
                if($params != ""){
                    $p = "'".implode("','",$params)."'";
                    $order = '$$modName = $this->makeObj($mod["ctrl"])->$func('.$p.');';
                    eval($order);
                }
                else{
                    $$modName = $this->makeObj($mod['ctrl'])->$func();
                }
                
            }
            $view->with(compact($modName));    
        }

        // $contactUs = $this->makeObj("IndexController")->contactUs();
        // $view->with(compact('contactUs'));

        return $view;
    }
    public function getParent($model)
    {
        $parents = $this->makeModelObj($model)->where("parent",0)->get();
        //$parents= LocationModel::where("parent",0)->get();
        $return =  array();
        
        foreach ($parents as $parent)
        {
            $item['parent'] = $parent;
            
            $childs = $this->getChild($model,$parent['id']);
            
            if(count($childs) > 0) 
            $item['childs'] = $childs;
            
            array_push($return, $item);
        }  
        //dd($return);
        return ($return);
    }
    
    
    
    //=========================================================
    public function getChild($model,$parentId)
    { 
        $child = $this->makeModelObj($model)->where("parent",$parentId)->get();
        //$child =LocationModel::where("parent",$parentId)->get();
        //print_r($child);
        $ITEMS  = array();
        foreach($child as $record)
        {
            $item = $record;

            array_push($ITEMS, $item);
        }
        
        return $ITEMS;         
    }

    public function pushRelationArray($relArray,$records)
    {
        foreach($relArray as $rel)
        {
            foreach($records as $record)
            {
                $titles = array();
                $ids = array();
                foreach($record->$rel as $sub)
                {
                    if($sub->title != "")
                        $titles[] = $sub->title;
                    else
                        $titles[] = $sub->name;

                    $ids[] = $sub->id;
                }
                 $id =$rel."_id";
                $record->$rel = $titles;
                $record->$id = $ids;
            
            }

        }
        return $records;

        
    }



}