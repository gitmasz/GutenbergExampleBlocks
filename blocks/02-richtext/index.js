import icon from './icon'
import './style.scss'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
// eslint-disable-next-line no-undef
const { registerBlockType } = wp.blocks
// eslint-disable-next-line no-undef, no-unused-vars
const { RichText } = wp.editor

export default registerBlockType(
  'gutenbergexampleblocks/richtext',
  {
    title: __('Example - RichText', 'gutenbergexampleblocks'),
    description: __('How to use the RichText component for building your own editable blocks.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icon
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('RichText Block', 'gutenbergexampleblocks'),
      __('Message', 'gutenbergexampleblocks')
    ],
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body'
      }
    },
    edit: props => {
      const { attributes: { message }, className, setAttributes } = props
      const onChangeMessage = message => { setAttributes({ message }) }
      return (
        <>
              <div className={className}>
                  <h2>{__('RichText Block', 'gutenbergexampleblocks')}</h2>
                  <RichText
                      tagName="div"
                      multiline="p"
                      placeholder={__('Add your custom message', 'gutenbergexampleblocks')}
                      onChange={onChangeMessage}
                      value={message}
                  />
              </div>
        </>
      )
    },
    save: props => {
      const { attributes: { message } } = props
      return (
        <>
              <div>
                  <h2>{__('RichText Block', 'gutenbergexampleblocks')}</h2>
                  <div class="message-body">
                      {message}
                  </div>
              </div>
        </>
      )
    }
  }
)
