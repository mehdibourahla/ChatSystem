<?php

namespace App\Http\Controllers\API;

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
        return response($createdMessage);
    }

    public function index()
    {
        return response(Message::orderBy('created_at', 'desc')->get());
    }
}
