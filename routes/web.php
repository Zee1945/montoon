<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/','/prototype/login');

Route::get('/admin', function () {
    return 'Hi admin';
})->middleware(['auth', 'verified','role:admin']);

Route::get('/user', function () {
    return 'Hi user';
})->middleware(['auth', 'verified','role:user']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function(){
    Route::get('/login',function(){
        return Inertia::render('Prototype/Login');
        // return Inertia::render('Prototype/Login');

    })->name('login');
    Route::get('/register',function(){
        return Inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard',function(){
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
    Route::get('/subscriptionPlan',function(){
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');
    Route::get('/movie/{slug}',function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
