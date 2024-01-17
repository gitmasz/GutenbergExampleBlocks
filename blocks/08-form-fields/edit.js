// eslint-disable-next-line no-undef
const { __ } = wp.i18n
// eslint-disable-next-line no-undef
const { Component } = wp.element
const {
  // eslint-disable-next-line no-unused-vars
  ColorPalette
  // eslint-disable-next-line no-undef
} = wp.editor
const {
  // eslint-disable-next-line no-unused-vars
  CheckboxControl,
  // eslint-disable-next-line no-unused-vars
  RadioControl,
  // eslint-disable-next-line no-unused-vars
  RangeControl,
  // eslint-disable-next-line no-unused-vars
  TextControl,
  // eslint-disable-next-line no-unused-vars
  TextareaControl,
  // eslint-disable-next-line no-unused-vars
  ToggleControl,
  // eslint-disable-next-line no-unused-vars
  SelectControl
// eslint-disable-next-line no-undef
} = wp.components

export default class Edit extends Component {
  render () {
    const {
      attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl },
      className, setAttributes
    } = this.props

    return (
      <>
        <div className={className}>

          <p><strong>Checkbox control</strong></p>
          <CheckboxControl
            label={__('Check here', 'gutenbergexampleblocks')}
            help={__('Checkbox control help text', 'gutenbergexampleblocks')}
            checked={checkboxControl}
            onChange={checkboxControl => setAttributes({ checkboxControl })}
          />
          <hr />

          <p><strong>Color Palette</strong></p>
          <ColorPalette
            value={colorPaletteControl}
            onChange={colorPaletteControl => setAttributes({ colorPaletteControl })}
          />
          <hr />

          <p><strong>Radio Control</strong></p>
          <RadioControl
            label={__('Radio Control', 'gutenbergexampleblocks')}
            selected={radioControl}
            options={[
              { label: 'Author', value: 'a' },
              { label: 'Editor', value: 'e' }
            ]}
            onChange={radioControl => setAttributes({ radioControl })}
          />
          <hr />

          <p><strong>Range Control</strong></p>
          <RangeControl
            beforeIcon="arrow-left-alt2"
            afterIcon="arrow-right-alt2"
            label={__('Range Control', 'gutenbergexampleblocks')}
            value={rangeControl}
            onChange={rangeControl => setAttributes({ rangeControl })}
            min={1}
            max={10}
          />
          <hr />

          <p><strong>Text control</strong></p>
          <TextControl
            label={__('Text Control', 'gutenbergexampleblocks')}
            help={__('Text control help text', 'gutenbergexampleblocks')}
            value={textControl}
            onChange={textControl => setAttributes({ textControl })}
          />
          <hr />

          <p><strong>Text area control</strong></p>
          <TextareaControl
            label={__('Text Area Control', 'gutenbergexampleblocks')}
            help={__('Text area control help text', 'gutenbergexampleblocks')}
            value={textareaControl}
            onChange={textareaControl => setAttributes({ textareaControl })}
          />
          <hr />

          <p><strong>Toggle Control</strong></p>
          <ToggleControl
            label={__('Toggle Control', 'gutenbergexampleblocks')}
            checked={toggleControl}
            onChange={toggleControl => setAttributes({ toggleControl })}
          />
          <hr />

          <p><strong>Select Control</strong></p>
          <SelectControl
            label={__('Select Control', 'gutenbergexampleblocks')}
            value={selectControl}
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C' }
            ]}
            onChange={selectControl => setAttributes({ selectControl })}
          />
          <hr />

        </div>
      </>
    )
  }
}
