<?php

namespace App\Models;

use App\Models\SubscriptionPlan ;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id', 'subscription_plan_id', 'start_date', 'end_date', 'status'];

    public function subscriptionPlan():BelongsTo
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }
}
