<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\AuthResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Fetch the CSRF cookie
    public function csrfCookie()
    {
        return response()->json(['message' => 'CSRF cookie set'])
            ->cookie('XSRF-TOKEN', csrf_token(), 60, '/', null, false, true);
    }

    // User Registration
    public function register(RegisterRequest $request)
    {
        $fields = $request->validated();

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']) // More secure
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully.',
            'data' => new AuthResource($user)
        ], 201);
    }

    // User Login
    public function login(LoginRequest $request)
    {
        $fields = $request->validated();
        $user = User::where('email', $fields['email'])->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials.',
                'errors' => ['email' => ['No matching user was found with this email.']]
            ], 401);
        }

        if (!Hash::check($fields['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials.',
                'errors' => ['password' => ['The provided password is incorrect.']]
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Login successful.',
            'data' => new AuthResource($user)
        ], 200);
    }

    // User Logout
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    // Get Authenticated User
    public function me(Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => new AuthResource($request->user())
        ], 200);
    }
}
