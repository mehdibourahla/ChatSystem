<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MessageController;
use App\Http\Controllers\API\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/authUser', [AuthController::class, 'getAuthUser']);
    Route::get('/getUsers', [AuthController::class, 'getConnectedUsers']);

    Route::post('/sendMessage', [MessageController::class, 'store']);
    Route::get('/getMessages', [MessageController::class, 'index']);

    Route::put('/profile', [ProfileController::class, 'update']);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
