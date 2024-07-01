// 声明模块解析器支持导入图片
declare module '*.png' {
  const value: any;
  export default value;
}

