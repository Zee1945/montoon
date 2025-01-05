<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $data = [
        [
            'name' => 'Movie 1',
            'slug' => 'movie-1',
            'category' => 'Action',
            'video_url' => 'https://www.youtube.com/watch?v=1',
            'thumbnail' => 'https://via.placeholder.com/150',
            'rating' => 4.5,
            'is_featured' => 0
        ],[
            'name' => 'Movie 2',
            'slug' => 'movie-2',
            'category' => 'Comedy',
            'video_url' => 'https://www.youtube.com/watch?v=2',
            'thumbnail' => 'https://via.placeholder.com/150',
            'rating' => 4.0,
            'is_featured' => 0
        ],[
            'name' => 'Movie 3',
            'slug' => 'movie-3',
            'category' => 'Horror',
            'video_url' => 'https://www.youtube.com/watch?v=3',
            'thumbnail' => 'https://via.placeholder.com/150',
            'rating' => 3.5,
            'is_featured' => 1
        ]
       ];

       Movie::insert($data);
    }
}
