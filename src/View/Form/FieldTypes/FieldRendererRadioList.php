<?php
namespace Netshine\Scaffold\View\Form\FieldTypes;

use Netshine\Scaffold\View\Form\FieldRenderer;

class FieldRendererRadioList extends FieldRenderer
{
    protected function renderCaption($confirmation = false)
    {
        //Use a div tag instead of a label, as we will be using labels for the individual options
        ob_start();
        parent::renderCaption($confirmation);
        $output = ob_get_clean();
        $output = str_replace('<label', '<div', $output);
        $output = str_replace('</label>', '</div>', $output);
        echo $output;
    }

    public function renderControl($type = null, $confirmation = false)
    {
        foreach ($this->field->options as $value=>$description)
        {
            ?>
            <input type="radio" name="<?php echo $this->field->name; ?>" <?php $this->outputId('', $value); ?> value="<?php echo $value; ?>"<?php if ($this->field->value == $value) {echo ' checked="checked"';} ?> class="field-control-radio <?php echo $this->field->css_class; ?>"><label class="radio-label" for="<?php echo $this->field->name; ?>_<?php echo $value; ?>"><?php echo $description; ?></label><br />
            <?php
        }
    }
}