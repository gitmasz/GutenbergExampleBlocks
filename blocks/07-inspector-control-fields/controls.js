// eslint-disable-next-line no-undef
const { Component } = wp.element
const {
  // eslint-disable-next-line no-unused-vars
  AlignmentToolbar,
  // eslint-disable-next-line no-unused-vars
  BlockControls,
  // eslint-disable-next-line no-unused-vars
  BlockAlignmentToolbar
// eslint-disable-next-line no-undef
} = wp.editor

export default class Inspector extends Component {
  render () {
    const { attributes: { blockAlignment, textAlignment }, setAttributes } = this.props
    return (
        <>
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
        </>
    )
  }
}
