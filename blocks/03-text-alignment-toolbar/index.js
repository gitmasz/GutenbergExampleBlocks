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
  BlockControls
// eslint-disable-next-line no-undef
} = wp.editor
const {
  useBlockProps
// eslint-disable-next-line no-undef
} = wp.blockEditor

export default registerBlockType(
  'gutenbergexampleblocks/text-alignment-toolbar',
  {
    title: __('Example - Alignment Toolbar', 'gutenbergexampleblocks'),
    description: __('How to add an alignment toolbar to a block for aligning text.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: 'editor-alignleft'
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('RichText Block', 'gutenbergexampleblocks'),
      __('Message', 'gutenbergexampleblocks'),
      __('Alignment Toolbar', 'gutenbergexampleblocks')
    ],
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body'
      },
      textAlignment: {
        type: 'string'
      }
    },
    edit: props => {
      const {
        attributes: { textAlignment, message },
        className, setAttributes
      } = props

      return (
        <>
            <div className={ className } >
                <BlockControls>
                    <AlignmentToolbar
                        value={ textAlignment }
                        onChange={ textAlignment => setAttributes({ textAlignment }) }
                    />
                </BlockControls>
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={ __('Enter your message here...', 'gutenbergexampleblocks') }
                    value={ message }
                    style={ { textAlign: textAlignment } }
                    onChange={ message => setAttributes({ message }) }
                />
            </div>
        </>
      )
    },
    save: props => {
      const { textAlignment, message } = props.attributes
      const blockProps = useBlockProps.save({
        className: 'message-body',
        style: { textAlign: textAlignment }
      })

      return (
        <>
            <div {...blockProps}>
              { message }
            </div>
        </>
      )
    }

  }
)
