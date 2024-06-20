<?php

namespace Api\Controllers;
use App\Http\Controllers\Controller;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="API Documentation",
 *      description="API description",
 *      @OA\Contact(
 *          email="your-email@example.com"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *      )
 * )
 */
class SwaggerController extends Controller
{
    // این کلاس می‌تواند خالی باشد یا شامل مستندات دیگر
    /**
     * @OA\Put(
     *     path="/users/{id}",
     *     summary="Updates a user",
     *     @OA\Parameter(
     *         description="Parameter with mutliple examples",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="string"),
     *         @OA\Examples(example="int", value="1", summary="An int value."),
     *         @OA\Examples(example="uuid", value="0006faf6-7a61-426c-9034-579f2cfcfa83", summary="An UUID value."),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK"
     *     )
     * )
     */
    public function index(){

    }
}
