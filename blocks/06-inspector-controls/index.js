import icons from './icons'
import './style.scss'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
const {
  registerBlockType
  // eslint-disable-next-line no-undef
} = wp.blocks
const {
  // eslint-disable-next-line no-unused-vars
  RichText,
  // eslint-disable-next-line no-unused-vars
  AlignmentToolbar,
  // eslint-disable-next-line no-unused-vars
  BlockAlignmentToolbar,
  // eslint-disable-next-line no-unused-vars
  BlockControls,
  // eslint-disable-next-line no-unused-vars
  InspectorControls
// eslint-disable-next-line no-undef
} = wp.editor
const {
  useBlockProps
  // eslint-disable-next-line no-undef
} = wp.blockEditor
const {
  // eslint-disable-next-line no-unused-vars
  Toolbar,
  // eslint-disable-next-line no-unused-vars
  Button,
  // eslint-disable-next-line no-unused-vars
  Tooltip,
  // eslint-disable-next-line no-unused-vars
  PanelBody,
  // eslint-disable-next-line no-unused-vars
  PanelRow,
  // eslint-disable-next-line no-unused-vars
  FormToggle
// eslint-disable-next-line no-undef
} = wp.components

export default registerBlockType(
  'gutenbergexampleblocks/inspector-controls',
  {
    title: __('Example - Inspector Controls', 'gutenbergexampleblocks'),
    description: __('An example of how to use the Inspector component for a block.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icons.sidebar
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('RichText Block', 'gutenbergexampleblocks'),
      __('Message', 'gutenbergexampleblocks'),
      __('Alignment Toolbar', 'gutenbergexampleblocks'),
      __('Block Alignment Toolbar', 'gutenbergexampleblocks'),
      __('Inspector Controls', 'gutenbergexampleblocks')
    ],
    attributes: {
      textAlignment: {
        type: 'string'
      },
      blockAlignment: {
        type: 'string',
        default: 'wide'
      },
      highContrast: {
        type: 'boolean',
        default: false
      },
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body'
      }
    },
    getEditWrapperProps ({ blockAlignment }) {
      if (blockAlignment === 'left' || blockAlignment === 'right' || blockAlignment === 'full') {
        return { 'data-align': blockAlignment }
      }
    },
    edit: props => {
      const {
        attributes: { textAlignment, blockAlignment, message, highContrast },
        className, setAttributes
      } = props

      return (
        <>
          <InspectorControls>
            <PanelBody
              title={__('High Contrast', 'gutenbergexampleblocks')}
            >
              <PanelRow>
                <label
                  htmlFor="high-contrast-form-toggle"
                >
                  {__('High Contrast', 'gutenbergexampleblocks')}
                </label>
                <FormToggle
                  id="high-contrast-form-toggle"
                  label={__('High Contrast', 'gutenbergexampleblocks')}
                  checked={highContrast}
                  onChange={() => setAttributes({ highContrast: !highContrast })}
                />
              </PanelRow>
            </PanelBody>
          </InspectorControls>
          <div className={`${className} ${highContrast ? ' high-contrast' : ''}`}>
            <BlockControls>
              <BlockAlignmentToolbar
                value={blockAlignment}
                onChange={blockAlignment => setAttributes({ blockAlignment })}
              />
              <AlignmentToolbar
                value={textAlignment}
                onChange={(textAlignment) => props.setAttributes({ textAlignment })}
              />
              <Toolbar>
                <Tooltip text={__('High Contrast', 'gutenbergexampleblocks')}>
                  <Button
                    className={`${highContrast ? 'high-contrast ' : ''} 'components-icon-button components-toolbar__control'`}
                    onClick={() => setAttributes({ highContrast: !highContrast })}
                  >
                    {icons.contrast}
                  </Button>
                </Tooltip>
              </Toolbar>
            </BlockControls>
            <RichText
              tagName="div"
              multiline="p"
              placeholder={__('Enter your message here...', 'gutenbergexampleblocks')}
              value={message}
              style={{ textAlign: textAlignment }}
              onChange={(message) => props.setAttributes({ message })}
            />
          </div>
        </>
      )
    },
    save: props => {
      const { highContrast, blockAlignment, textAlignment, message } = props.attributes
      const blockProps = useBlockProps.save({
        className: `align${blockAlignment} message-body ${highContrast ? ' high-contrast' : ''}`,
        style: { textAlign: textAlignment }
      })

      return (
        <>
          <div {...blockProps}>
            {message}
          </div>
        </>
      )
    }

  }
)
