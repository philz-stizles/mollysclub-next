import React from 'react'

type TextInputProps = {
  type?: string
  label: string
  placeholder: string
  value: string
  required?: boolean
  onChange?: (e: any) => void
}

const TextInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
}: TextInputProps) => {
  type = type ? type : 'text'
  return (
    <div className="text-input">
      {label && <label className="text-input__label">{label}</label>}
      <input
        type={type}
        className="text-input__input"
        placeholder={placeholder}
        value={value}
        spellCheck="false"
        data-ms-editor="true"
        onChange={onChange}
        required={required ? required : false}
      />
      <div className="text-input__msg">
        Your name may appear around here where you are mentioned. You can change
        or remove it at any time.
      </div>
      <style jsx>{`
        .text-input {
          margin-bottom: 20px;
        }

        .text-input__label {
          display: block;
          color: #373857;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .text-input__input {
          display: block;
          width: 100%;
          height: calc(1.5em + 0.874rem + 2px);
          padding: 0.437rem 0.75rem;
          font-weight: 400;
          line-height: 1.5;
          color: #373857;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #d9dfe7;
          border-radius: 0;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .text-input__msg {
          font-size: 11px;
          color: rgba(55, 56, 87, 0.6);
          margin-top: 5px;
        }
      `}</style>
    </div>
  )
}

export default TextInput
