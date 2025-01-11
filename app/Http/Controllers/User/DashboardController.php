<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $featured_movies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();
        // return ['featured_movies'=>$featured_movies,'movies'=>$movies];
        return Inertia::render('User/Dashboard/Index',['featuredMovies'=>$featured_movies,'movies'=>$movies]);



    }
}
