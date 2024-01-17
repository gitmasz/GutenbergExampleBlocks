import icon from './icon'
import './style.scss'
import './editor.scss'

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
  BlockControls,
  // eslint-disable-next-line no-unused-vars
  BlockAlignmentToolbar
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
  Tooltip
// eslint-disable-next-line no-undef
} = wp.components

export default registerBlockType(
  'gutenbergexampleblocks/custom-toolbar',
  {
    title: __('Example - Custom Toolbar', 'gutenbergexampleblocks'),
    description: __('An example of how to add a custom element to the block toolbar.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icon
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('RichText Block', 'gutenbergexampleblocks'),
      __('Message', 'gutenbergexampleblocks'),
      __('Custom Toolbar', 'gutenbergexampleblocks')
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
          <div className={`${className} ${highContrast ? ' high-contrast' : ''}`}>
            <BlockControls key="custom-controls">
              <BlockAlignmentToolbar
                value={blockAlignment}
                onChange={blockAlignment => setAttributes({ blockAlignment })}
              />
              <AlignmentToolbar
                value={textAlignment}
                onChange={textAlignment => props.setAttributes({ textAlignment })}
              />
              <Toolbar>
                <Tooltip text={__('High Contrast', 'gutenbergexampleblocks')}>
                  <Button
                    className={`${highContrast ? 'high-contrast ' : ''} 'components-icon-button components-toolbar__control'`}
                    onClick={() => setAttributes({ highContrast: !highContrast })}
                  >
                    {icon}
                  </Button>
                </Tooltip>
              </Toolbar>
            </BlockControls>
            <RichText
              tagName="div"
              multiline="p"
              placeholder={__('Enter your message here..', 'gutenbergexampleblocks')}
              value={message}
              className={`'message-body' ${highContrast ? ' high-contrast' : ''}`}
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
