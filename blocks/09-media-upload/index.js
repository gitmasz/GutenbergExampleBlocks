import icons from './icons'
import './editor.scss'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
const {
  registerBlockType
// eslint-disable-next-line no-undef
} = wp.blocks
const {
  // eslint-disable-next-line no-unused-vars
  MediaUpload
// eslint-disable-next-line no-undef
} = wp.editor
const {
  // eslint-disable-next-line no-unused-vars
  Button
// eslint-disable-next-line no-undef
} = wp.components

export default registerBlockType(
  'gutenbergexampleblocks/media-upload',
  {
    title: __('Example - Media Upload Button', 'gutenbergexampleblocks'),
    description: __('An example of how to use the MediaUpload component.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icons.upload
    },
    keywords: [
      __('Image', 'gutenbergexampleblocks'),
      __('MediaUpload', 'gutenbergexampleblocks')
    ],
    attributes: {
      imgURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
      },
      imgID: {
        type: 'number'
      },
      imgAlt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img'
      }
    },
    edit: props => {
      const {
        attributes: { imgID, imgURL, imgAlt },
        className, setAttributes, isSelected
      } = props
      const onSelectImage = img => {
        setAttributes({
          imgID: img.id,
          imgURL: img.url,
          imgAlt: img.alt
        })
      }
      const onRemoveImage = () => {
        setAttributes({
          imgID: null,
          imgURL: null,
          imgAlt: null
        })
      }
      return (
          <>
              <div className={className}>
                  {!imgID
                    ? (
                          <MediaUpload
                              onSelect={onSelectImage}
                              type="image"
                              value={imgID}
                              render={({ open }) => (
                                  <Button
                                      className={'button button-large'}
                                      onClick={open}
                                  >
                                      {icons.upload}
                                      {__(' Upload Image', 'gutenbergexampleblocks')}
                                  </Button>
                              )}
                          >
                          </MediaUpload>
                      )
                    : (
                          <p class="image-wrapper">
                              <img
                                  src={imgURL}
                                  alt={imgAlt}
                              />
                              {isSelected
                                ? (
                                      <Button
                                          className="remove-image"
                                          onClick={onRemoveImage}
                                      >
                                          {icons.remove}
                                      </Button>
                                  )
                                : null}
                          </p>
                      )}
              </div>
          </>
      )
    },
    save: props => {
      const { imgURL, imgAlt } = props.attributes
      return (
          <>
              <h2>{__('Media upload', 'gutenbergexampleblocks')}</h2>
              <p>
                  <img
                      src={imgURL}
                      alt={imgAlt}
                  />
              </p>
          </>
      )
    }
  }
)
