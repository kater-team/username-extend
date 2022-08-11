<?php

namespace Kater\UsernameExtend;

use Flarum\Discussion\Event\Saving;

class SaveDiscussion
{
    public function handle(Saving $event)
    {
        // Force slug to be equal to the manual slug whenever it changes
        if (!is_null($event->discussion->slug) ) {
            $event->discussion->slug = '';
        }
    }
}