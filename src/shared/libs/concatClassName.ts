export const cc = (className: string, value: any) => {
  if(value) {
    return `${className} ${value}`
  }
  
  return className
}