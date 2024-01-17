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
  BlockControls,
  // eslint-disable-next-line no-unused-vars
  BlockAlignmentToolbar
// eslint-disable-next-line no-undef
} = wp.editor
const {
  useBlockProps
  // eslint-disable-next-line no-undef
} = wp.blockEditor

export default registerBlockType(
  'gutenbergexampleblocks/block-alignment-toolbar',
  {
    title: __('Example - Block Alignment Toolbar', 'gutenbergexampleblocks'),
    description: __('How to add an alignment toolbar to a block for aligning an entire block.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: 'align-none'
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('RichText Block', 'gutenbergexampleblocks'),
      __('Message', 'gutenbergexampleblocks'),
      __('Block Alignment Toolbar', 'gutenbergexampleblocks')
    ],
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body'
      },
      textAlignment: {
        type: 'string'
      },
      blockAlignment: {
        type: 'string',
        default: 'wide'
      }
    },
    getEditWrapperProps ({ blockAlignment }) {
      if (blockAlignment === 'left' || blockAlignment === 'right' || blockAlignment === 'full') {
        return { 'data-align': blockAlignment }
      }
    },
    edit: props => {
      const {
        attributes: { textAlignment, blockAlignment, message },
        className, setAttributes
      } = props

      return (
        <>
              <div className={className} >
                  <BlockControls>
                      <BlockAlignmentToolbar
                          value={blockAlignment}
                          onChange={blockAlignment => setAttributes({ blockAlignment })}
                      />
                      <AlignmentToolbar
                          value={textAlignment}
                          onChange={textAlignment => setAttributes({ textAlignment })}
                      />
                  </BlockControls>
                  <RichText
                      tagName="div"
                      multiline="p"
                      placeholder={__('Enter your message here..', 'gutenbergexampleblocks')}
                      value={message}
                      style={{ textAlign: textAlignment }}
                      onChange={message => setAttributes({ message })}
                  />
              </div>
        </>
      )
    },
    save: props => {
      const { blockAlignment, textAlignment, message } = props.attributes
      const blockProps = useBlockProps.save({
        className: `align${blockAlignment} message-body`,
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
