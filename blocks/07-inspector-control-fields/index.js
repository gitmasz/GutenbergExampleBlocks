// eslint-disable-next-line no-unused-vars
import Inspector from './inspector'
// eslint-disable-next-line no-unused-vars
import Controls from './controls'
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

const getSettings = (atts) => {
  const settings = []
  const attributes = {}
  Object.keys(atts)
    .sort()
    .forEach(function (key) {
      attributes[key] = atts[key]
    })
  for (const attribute in attributes) {
    let value = attributes[attribute]
    if (typeof attributes[attribute] === 'boolean') {
      value = value.toString()
    }
    settings.push(
      <li>
        {attribute}: {value}
      </li>
    )
  }
  return settings
}

export default registerBlockType('gutenbergexampleblocks/inspector-control-fields', {
  title: __('Example - Inspector Fields', 'gutenbergexampleblocks'),
  description: __(
    'An example of how to use form fields in the Inspector element.',
    'gutenbergexampleblocks'
  ),
  category: 'common',
  icon: {
    background: 'rgba(254, 243, 224, 0.52)',
    src: icon
  },
  keywords: [
    __('Alignment Toolbar', 'gutenbergexampleblocks'),
    __('Block Alignment Toolbar', 'gutenbergexampleblocks'),
    __('Inspector Controls', 'gutenbergexampleblocks'),
    __('Inspector Fields', 'gutenbergexampleblocks')
  ],
  attributes,
  getEditWrapperProps (attributes) {
    const { blockAlignment } = attributes
    if (
      blockAlignment === 'left' ||
      blockAlignment === 'right' ||
      blockAlignment === 'full'
    ) {
      return { 'data-align': blockAlignment }
    }
  },
  edit: props => {
    const {
      attributes,
      className,
      setAttributes
    } = props

    const settings = getSettings(attributes) ? getSettings(attributes) : '<li>' + __('No settings', 'gutenbergexampleblocks') + '</li>'

    return (
      <>
        <Inspector {...{ setAttributes, ...props }} />
        <div className={className} style={{ textAlign: `${attributes.textAlignment}` }}>
          <Controls {...{ setAttributes, ...props }} />
          <h2>{ __('Inspector Control Fields', 'gutenbergexampleblocks') }</h2>
          <ul>{settings}</ul>
        </div>
      </>
    )
  },
  save: props => {
    const {
      attributes
    } = props
    const blockProps = useBlockProps.save({
      className: `align${attributes.blockAlignment}`,
      style: { textAlign: `${attributes.textAlignment}` }
    })
    const settings = getSettings(attributes) ? getSettings(attributes) : '<li>' + __('No settings', 'gutenbergexampleblocks') + '</li>'

    return (
      <>
        <div {...blockProps}>
          <h2>{ __('Inspector Control Fields', 'gutenbergexampleblocks') }</h2>
          <ul>{settings}</ul>
        </div>
      </>
    )
  }
})
