import icon from './icon'
import './style.scss'
import './editor.scss'

// eslint-disable-next-line no-undef
const { __ } = wp.i18n
// eslint-disable-next-line no-undef
const { registerBlockType } = wp.blocks

export default registerBlockType(
  'gutenbergexampleblocks/static',
  {
    title: __('Example - Static Block', 'gutenbergexampleblocks'),
    description: __('Demonstration of how to make a static block.', 'gutenbergexampleblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icon
    },
    keywords: [
      __('Banner', 'gutenbergexampleblocks'),
      __('Static Block', 'gutenbergexampleblocks'),
      __('Shout Out', 'gutenbergexampleblocks')
    ],
    edit: props => {
      const { className, isSelected } = props
      return (
        <>
            <div className={ className }>
              <h2>{ __('Static Block', 'gutenbergexampleblocks') }</h2>
              <p>{ __('Static block message', 'gutenbergexampleblocks') }</p>
              {
                isSelected && (
                  <p className="sorry warning">{ __('✋ Sorry! You cannot edit this block ✋', 'gutenbergexampleblocks') }</p>
                )
              }
            </div>
        </>
      )
    },
    save: props => {
      return (
        <>
            <div>
              <h2>{ __('Static Block', 'gutenbergexampleblocks') }</h2>
              <p>{ __('Static block message', 'gutenbergexampleblocks') }</p>
            </div>
        </>
      )
    }
  }
)
