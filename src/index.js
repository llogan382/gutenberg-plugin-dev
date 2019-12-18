const { registerBlockType } = wp.blocks;
const {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
} = wp.components;
const {
	RichText,
	InspectorControls,
} = wp.editor;


registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: 'Inspector controls example',

	icon: 'universal-access-alt',

	category: 'layout',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
		},
		selectField: {
			type: 'string',
		},
	},

	edit({ attributes, setAttributes }) {
		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		}

		const onChangeCheckboxField = (newValue) => {
			setAttributes({ checkboxField: newValue });
		}

		const onChangeRadioField = (newValue) => {
			setAttributes({ radioField: newValue });
		}

		const onChangeTextField = (newValue) => {
			setAttributes({ textField: newValue });
		}

		const onChangeToggleField = (newValue) => {
			setAttributes({ toggleField: newValue });
		}

		const onChangeSelectField = (newValue) => {
			setAttributes({ selectField: newValue });
		}

		return (
			<>
				<InspectorControls>

					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={checkboxField}
						onChange={onChangeCheckboxField}
					/>

					<RadioControl
						label="Radio Field"
						selected={radioField}
						options={
							[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							]
						}
						onChange={onChangeRadioField}
					/>

					<TextControl
						label="Text Field"
						help="Additional help text"
						value={textField}
						onChange={onChangeTextField}
					/>

					<ToggleControl
						label="Toggle Field"
						checked={toggleField}
						onChange={onChangeToggleField}
					/>

					<SelectControl
						label="Select Control"
						value={selectField}
						options={
							[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]
						}
						onChange={onChangeSelectField}
					/>

				</InspectorControls>

				<RichText
					key="editable"
					tagName="p"
					onChange={onChangeContent}
					value={content}
				/>
			</>
		);
	},

	save({ attributes }) {
		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		return (
			<div>
				<RichText.Content
					value={content}
					tagName="p"
				/>

				<h2>Inspector Control Fields</h2>
				<ul>
					<li>Checkbox Field: {checkboxField}</li>
					<li>Radio Field: {radioField}</li>
					<li>Text Field: {textField}</li>
					<li>Toggle Field: {toggleField}</li>
					<li>Select Field: {selectField}</li>
				</ul>
			</div>
		);
	},
});