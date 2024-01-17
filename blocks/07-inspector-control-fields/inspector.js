// eslint-disable-next-line no-undef
const { __ } = wp.i18n
// eslint-disable-next-line no-undef
const { Component } = wp.element
const {
  // eslint-disable-next-line no-unused-vars
  InspectorControls,
  // eslint-disable-next-line no-unused-vars
  ColorPalette,
  // eslint-disable-next-line no-unused-vars
  PanelColorSettings,
  // eslint-disable-next-line no-unused-vars
  ContrastChecker
// eslint-disable-next-line no-undef
} = wp.editor

const {
  // eslint-disable-next-line no-unused-vars
  CheckboxControl,
  // eslint-disable-next-line no-unused-vars
  PanelBody,
  // eslint-disable-next-line no-unused-vars
  PanelRow,
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
        colorPaletteControl1,
        colorPaletteControl2,
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
            title={__('Panel Body Title', 'gutenbergexampleblocks')}
            initialOpen={false}
          >
            <PanelRow>
              <p>{__('Panel Body Copy', 'gutenbergexampleblocks')}</p>
            </PanelRow>
          </PanelBody>

          <PanelBody
            title={__('Checkbox Control', 'gutenbergexampleblocks')}
          >
            <CheckboxControl
              label={__('Check here', 'gutenbergexampleblocks')}
              help={__('Checkbox control help text', 'gutenbergexampleblocks')}
              checked={checkboxControl}
              onChange={checkboxControl => setAttributes({ checkboxControl })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('Color Settings 1', 'gutenbergexampleblocks')}
            colorSettings={[
              {
                value: colorPaletteControl1,
                onChange: colorPaletteControl1 => {
                  setAttributes({ colorPaletteControl1 })
                },
                label: __('Background Color', 'gutenbergexampleblocks')
              }
            ]}
          />

          <PanelBody>
            <h3>{__('Color Settings 2', 'gutenbergexampleblocks')}</h3>
            <ColorPalette
              value={colorPaletteControl2}
              onChange={colorPaletteControl2 => {
                setAttributes({ colorPaletteControl2 })
              }}
            />
            <ContrastChecker
              {...{
                isLargeText: false,
                textColor: colorPaletteControl2,
                backgroundColor: colorPaletteControl1
              }}
            />
          </PanelBody>
          <PanelBody>
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

          <PanelBody>
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

          <PanelBody>
            <TextControl
              label={__('Text Control', 'gutenbergexampleblocks')}
              help={__('Text control help text', 'gutenbergexampleblocks')}
              value={textControl}
              onChange={textControl => setAttributes({ textControl })}
            />
          </PanelBody>

          <PanelBody>
            <TextareaControl
              label={__('Text Area Control', 'gutenbergexampleblocks')}
              help={__('Text area control help text', 'gutenbergexampleblocks')}
              value={textareaControl}
              onChange={textareaControl => setAttributes({ textareaControl })}
            />
          </PanelBody>

          <PanelBody>
            <ToggleControl
              label={__('Toggle Control', 'gutenbergexampleblocks')}
              checked={toggleControl}
              onChange={toggleControl => setAttributes({ toggleControl })}
            />
          </PanelBody>

          <PanelBody>
            <SelectControl
              label={__('Select Control', 'gutenbergexampleblocks')}
              value={selectControl}
              options={[
                { value: 'a', label: __('Option A', 'gutenbergexampleblocks') },
                { value: 'b', label: __('Option B', 'gutenbergexampleblocks') },
                { value: 'c', label: __('Option C', 'gutenbergexampleblocks') }
              ]}
              onChange={selectControl => setAttributes({ selectControl })}
            />
          </PanelBody>
        </InspectorControls>
      </>
    )
  }
}
