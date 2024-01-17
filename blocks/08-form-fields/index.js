// eslint-disable-next-line no-unused-vars
import Inspector from './inspector'
// eslint-disable-next-line no-unused-vars
import Edit from './edit'
import icon from './icon'
import attributes from './attributes'
import './style.scss'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
const {
  registerBlockType
// eslint-disable-next-line no-undef
} = wp.blocks
const {
  useBlockProps
  // eslint-disable-next-line no-undef
} = wp.blockEditor

function getSettings (attributes) {
  const settings = []
  for (const attribute in attributes) {
    let value = attributes[attribute]
    if (typeof attributes[attribute] === 'boolean') {
      value = value.toString()
    }
    settings.push(<li>{attribute}: {value}</li>)
  }
  return settings
}

export default registerBlockType(
  'gutenbergexampleblocks/form-fields',
  {
    title: __('Example - Form Fields', 'gutenbergexampleblocks'),
    description: __('An example of how to use form component in a block.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icon
    },
    keywords: [
      __('Inspector Controls', 'gutenbergexampleblocks'),
      __('Inspector Fields', 'gutenbergexampleblocks'),
      __('Block Form', 'gutenbergexampleblocks')
    ],
    attributes,
    getEditWrapperProps (attributes) {
      const { blockAlignment } = attributes
      if (blockAlignment === 'left' || blockAlignment === 'right' || blockAlignment === 'full') {
        return { 'data-align': blockAlignment }
      }
    },
    edit: props => {
      const { setAttributes } = props

      return (
          <>
              <Inspector {...{ setAttributes, ...props }} />
              <Edit {...{ setAttributes, ...props }} />
          </>
      )
    },
    save: props => {
      const {
        attributes
      } = props
      const blockProps = useBlockProps.save()
      const settings = getSettings(attributes) ? getSettings(attributes) : '<li>' + __('No settings', 'gutenbergexampleblocks') + '</li>'

      return (
            <>
              <div {...blockProps}>
                <h2>{ __('Block Form Fields', 'gutenbergexampleblocks') }</h2>
                <ul>{settings}</ul>
              </div>
            </>
      )
    }
  }
)
