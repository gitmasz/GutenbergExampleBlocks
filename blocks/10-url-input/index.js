import icon from './icon'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
const {
  // eslint-disable-next-line no-unused-vars
  Fragment
  // eslint-disable-next-line no-undef
} = wp.element
const {
  registerBlockType
// eslint-disable-next-line no-undef
} = wp.blocks
const {
  // eslint-disable-next-line no-unused-vars
  URLInput
  // eslint-disable-next-line no-undef
} = wp.editor
const {
  // eslint-disable-next-line no-unused-vars
  TextControl
// eslint-disable-next-line no-undef
} = wp.components

export default registerBlockType(
  'gutenbergexampleblocks/url-input',
  {
    title: __('Example - URL Input', 'gutenbergexampleblocks'),
    description: __('An example of how to use the URLInput component.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icon
    },
    keywords: [
      __('Link', 'gutenbergexampleblocks'),
      __('URLInput', 'gutenbergexampleblocks')
    ],
    attributes: {
      text: {
        type: 'string',
        source: 'text',
        selector: 'a'
      },
      url: {
        type: 'string',
        source: 'attribute',
        attribute: 'href',
        selector: 'a'
      }
    },
    edit: props => {
      const {
        attributes: { text, url },
        className, isSelected, setAttributes
      } = props
      return (
        <>
          <div className={className}>
            {
              isSelected
                ? (
                  <Fragment>
                    <p>{__('Link Text', 'gutenbergexampleblocks')}</p>
                    <TextControl
                      id="example-input-field"
                      value={text}
                      onChange={text => setAttributes({ text })}
                    />
                    <p>{__('Link URL', 'gutenbergexampleblocks')}</p>
                    <URLInput
                        className="url"
                        value={url}
                        onChange={url => setAttributes({ url })}
                      />
                  </Fragment>
                  )
                : (
                  <p>
                    <a href={url}>
                      {text || __('Edit link', 'gutenbergexampleblocks')}
                    </a>
                  </p>
                  )
            }
          </div>
        </>
      )
    },
    save: props => {
      const { attributes: { text, url } } = props

      return (
        <>
          <h2>{__('URL Input', 'gutenbergexampleblocks')}</h2>
          <p>
            <a href={url}>
              {text}
            </a>
          </p>
        </>
      )
    }
  }
)
