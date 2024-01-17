// eslint-disable-next-line no-undef
const { __ } = wp.i18n
// eslint-disable-next-line no-undef
const { Component } = wp.element
const {
  // eslint-disable-next-line no-unused-vars
  InspectorControls,
  // eslint-disable-next-line no-unused-vars
  PanelColorSettings
// eslint-disable-next-line no-undef
} = wp.editor
const {
  // eslint-disable-next-line no-unused-vars
  CheckboxControl,
  // eslint-disable-next-line no-unused-vars
  PanelBody,
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

export default class Inspector extends Component {
  render () {
    const {
      attributes: {
        checkboxControl,
        colorPaletteControl,
        radioControl,
        rangeControl,
        textControl,
        textareaControl,
        toggleControl,
        selectControl
      },
      setAttributes
    } = this.props

    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__('Checkbox Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <CheckboxControl
              label={__('Check here', 'gutenbergexampleblocks')}
              help={__('Checkbox control help text', 'gutenbergexampleblocks')}
              checked={checkboxControl}
              onChange={checkboxControl => setAttributes({ checkboxControl })}
            />
          </PanelBody>

          <PanelBody
            title={__('Color Panel', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <PanelColorSettings
              title={__('Color Panel', 'gutenbergexampleblocks')}
              colorSettings={[
                {
                  label: __('Color Picker'),
                  value: colorPaletteControl,
                  onChange: colorPaletteControl => {
                    setAttributes({ colorPaletteControl })
                  }
                }
              ]}
            />
          </PanelBody>

          <PanelBody
            title={__('Radio Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <RadioControl
              label={__('Radio Control', 'gutenbergexampleblocks')}
              selected={radioControl}
              options={[
                { label: 'Author', value: 'a' },
                { label: 'Editor', value: 'e' }
              ]}
              onChange={radioControl => setAttributes({ radioControl })}
            />
          </PanelBody>

          <PanelBody
            title={__('Range Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <RangeControl
              beforeIcon="arrow-left-alt2"
              afterIcon="arrow-right-alt2"
              label={__('Range Control', 'gutenbergexampleblocks')}
              value={rangeControl}
              onChange={rangeControl => setAttributes({ rangeControl })}
              min={1}
              max={10}
            />
          </PanelBody>

          <PanelBody
            title={__('Text control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <TextControl
              label={__('Text Control', 'gutenbergexampleblocks')}
              help={__('Text control help text', 'gutenbergexampleblocks')}
              value={textControl}
              onChange={textControl => setAttributes({ textControl })}
            />
          </PanelBody>

          <PanelBody
            title={__('Text Area Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <TextareaControl
              label={__('Text Area Control', 'gutenbergexampleblocks')}
              help={__('Text area control help text', 'gutenbergexampleblocks')}
              value={textareaControl}
              onChange={textareaControl => setAttributes({ textareaControl })}
            />
          </PanelBody>

          <PanelBody
            title={__('Toggle Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <ToggleControl
              label={__('Toggle Control', 'gutenbergexampleblocks')}
              checked={toggleControl}
              onChange={toggleControl => setAttributes({ toggleControl })}
            />
          </PanelBody>

          <PanelBody
            title={__('Select Control', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
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
          </PanelBody>
        </InspectorControls>
      </>
    )
  }
}
