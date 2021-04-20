<?php

namespace App\Http\Controllers\API;

use App\Events\MessageEvent;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class MessageController extends Controller
{
    public function store(Request $request)
    {
        $fields = $request->validate([
            'message' => 'required|string',
        ]);

        $createdMessage = auth()->user()->profile->messages()->create($fields);
        broadcast(new MessageEvent($createdMessage))->toOthers();
        return response($createdMessage);
    }

    public function index()
    {
        return response(Message::orderBy('created_at', 'desc')->paginate(10));
    }
}
