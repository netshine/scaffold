<?php
namespace Netshine\Scaffold\View\Form\FieldTypes;

use Netshine\Scaffold\View\Form\FieldBase;

class FieldLabel extends FieldBase
{
    public function initialise()
    {
        $this->is_read_only = true;
    }
}