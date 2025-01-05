<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $s_plan = new SubscriptionPlan();
        $data = [
            [
                'name' => 'Basic',
                'price' => 100000,
                'active_period_in_months' => 1,
                'features' => json_encode([
                    'feature1' => 'Feature 1',
                    'feature2' => 'Feature 2',
                    'feature3' => 'Feature 3',
                ])
            ],
            [
                'name' => 'Premium',
                'price' => 300000,
                'active_period_in_months' => 6,
                'features' => json_encode(
                    [
                    'feature1' => 'Feature 1',
                    'feature2' => 'Feature 2',
                    'feature3' => 'Feature 3',
                    'feature4' => 'Feature 4',
                    'feature5' => 'Feature 5',
                    'feature6' => 'Feature 6',
                    'feature7' => 'Feature 7',
                ])
            ]
                    ];

            $s_plan->insert($data);
    }
}
