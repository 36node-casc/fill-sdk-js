declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  sheet: SheetAPI;
  category: CategoryAPI;
  field: FieldAPI;
  counts: CountsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface SheetAPI {
  /**
   * List sheets
   */
  listSheets(req: ListSheetsRequest): Promise<ListSheetsResponse>;
  /**
   * Create a sheet
   */
  createSheet(req: CreateSheetRequest): Promise<CreateSheetResponse>;
  /**
   * Find sheet by id
   */
  getSheet(req: GetSheetRequest): Promise<GetSheetResponse>;
  /**
   * Update sheet
   */
  updateSheet(req: UpdateSheetRequest): Promise<UpdateSheetResponse>;
  /**
   * Delete sheet
   */
  deleteSheet(req: DeleteSheetRequest): Promise<void>;
  /**
   * List paperworks
   */
  listPaperworks(req: ListPaperworksRequest): Promise<ListPaperworksResponse>;
  /**
   * Add paperwork for sheet
   */
  addPaperwork(req: AddPaperworkRequest): Promise<AddPaperworkResponse>;
  /**
   * Find paperwork by id
   */
  getPaperwork(req: GetPaperworkRequest): Promise<GetPaperworkResponse>;
  /**
   * Remove a paperwork
   */
  removePaperwork(req: RemovePaperworkRequest): Promise<void>;
}
export interface CategoryAPI {
  /**
   * List categories
   */
  listCategories(req: ListCategoriesRequest): Promise<ListCategoriesResponse>;
  /**
   * Create a category
   */
  createCategory(req: CreateCategoryRequest): Promise<CreateCategoryResponse>;
  /**
   * Find category by id
   */
  getCategory(req: GetCategoryRequest): Promise<GetCategoryResponse>;
  /**
   * Update category
   */
  updateCategory(req: UpdateCategoryRequest): Promise<UpdateCategoryResponse>;
  /**
   * Delete category
   */
  deleteCategory(req: DeleteCategoryRequest): Promise<void>;
}
export interface FieldAPI {
  /**
   * List public fields
   */
  listFields(req: ListFieldsRequest): Promise<ListFieldsResponse>;
  /**
   * Create a field
   */
  createField(req: CreateFieldRequest): Promise<CreateFieldResponse>;
  /**
   * Find field by id
   */
  getField(req: GetFieldRequest): Promise<GetFieldResponse>;
  /**
   * Update field
   */
  updateField(req: UpdateFieldRequest): Promise<UpdateFieldResponse>;
  /**
   * Delete field
   */
  deleteField(req: DeleteFieldRequest): Promise<void>;
}
export interface CountsAPI {
  /**
   * CountAnswers
   */
  getCountOfAnswers(req: GetCountOfAnswersRequest): Promise<GetCountOfAnswersResponse>;
  /**
   * CountSheets
   */
  getCountOfSheets(req: GetCountOfSheetsRequest): Promise<GetCountOfSheetsResponse>;
  /**
   * CountPaperworks
   */
  getCountOfPaperworks(req: GetCountOfPaperworksRequest): Promise<GetCountOfPaperworksResponse>;
}

export interface ListSheetsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    isTemplate?: boolean;
    labels?: string[];
    name_like?: string;
    ns?: string[];
    "refs.oid"?: string;
    "refs.source"?: string;
    "refs.type"?: string;
    "refs.uri"?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListSheetsResponse {
  body: ({
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateSheetRequest {
  /**
   * 表单创建文档
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * 字段
     */
    fields: string[];
    /**
     * 名称
     */
    name: string;
    /**
     * 拥有者
     */
    owner: string;
  };
}
export interface CreateSheetResponse {
  /**
   * 表单
   */
  body: {
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  };
}
export interface GetSheetRequest {
  sheetId: string;
}
export interface GetSheetResponse {
  /**
   * 表单
   */
  body: {
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  };
}
export interface UpdateSheetRequest {
  sheetId: string;
  /**
   * 表单 Doc
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  };
}
export interface UpdateSheetResponse {
  /**
   * 表单
   */
  body: {
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  };
}
export interface DeleteSheetRequest {
  sheetId: string;
}
export interface ListPaperworksRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    respondents?: string[];
    inspectors?: string[];
  };
}
export interface ListPaperworksResponse {
  body: ({
    /**
     * 答案
     */
    answers?: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 描述
     */
    description?: string;
    /**
     * 调查者，可以能有多人
     */
    inspectors?: string[];
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 得分
     */
    score?: number;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 答案
     */
    answers: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 调查者，可以能有多人
     */
    inspectors: string[];
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface AddPaperworkRequest {
  sheetId: string;
  body: {
    /**
     * 答案
     */
    answers?: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 描述
     */
    description?: string;
    /**
     * 调查者，可以能有多人
     */
    inspectors?: string[];
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 得分
     */
    score?: number;
  } & {
    /**
     * 答案
     */
    answers: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * 答案所属分类，["第一层分类id", "第二层分类id"]
       */
      categories?: string[];
    })[];
    /**
     * 调查者，可以能有多人
     */
    inspectors: string[];
  };
}
export interface AddPaperworkResponse {
  /**
   * 填表结果
   */
  body: {
    /**
     * 答案
     */
    answers?: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 描述
     */
    description?: string;
    /**
     * 调查者，可以能有多人
     */
    inspectors?: string[];
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 得分
     */
    score?: number;
  };
}
export interface GetPaperworkRequest {
  sheetId: string;
  paperworkId: string;
}
export interface GetPaperworkResponse {
  body: {
    /**
     * 答案
     */
    answers?: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 描述
     */
    description?: string;
    /**
     * 调查者，可以能有多人
     */
    inspectors?: string[];
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 得分
     */
    score?: number;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 答案
     */
    answers: ({
      /**
       * 字段 id
       */
      field: string;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 值
       */
      value: {
        [k: string]: any;
      };
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类，[{第一层分类}, {第二层分类}]
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
    })[];
    /**
     * 调查者，可以能有多人
     */
    inspectors: string[];
  };
}
export interface RemovePaperworkRequest {
  sheetId: string;
  paperworkId: string;
}
export interface ListCategoriesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    parent?: string[];
  };
}
export interface ListCategoriesResponse {
  body: ({
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateCategoryRequest {
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  };
}
export interface CreateCategoryResponse {
  /**
   * 类别
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  };
}
export interface GetCategoryRequest {
  categoryId: string;
}
export interface GetCategoryResponse {
  /**
   * 类别
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  };
}
export interface UpdateCategoryRequest {
  categoryId: string;
  /**
   * 类别 Doc
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  };
}
export interface UpdateCategoryResponse {
  /**
   * 类别
   */
  body: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  };
}
export interface DeleteCategoryRequest {
  categoryId: string;
}
export interface ListFieldsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    categories?: string[];
  };
}
export interface ListFieldsResponse {
  body: ({
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 是否是必须的字段
     */
    required: boolean;
    /**
     * 字段类型
     */
    type: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateFieldRequest {
  body: {
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories?: string[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 字段类型
     */
    type: string;
  };
}
export interface CreateFieldResponse {
  body: {
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 是否是必须的字段
     */
    required: boolean;
    /**
     * 字段类型
     */
    type: string;
  };
}
export interface GetFieldRequest {
  fieldId: string;
}
export interface GetFieldResponse {
  body: {
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 是否是必须的字段
     */
    required: boolean;
    /**
     * 字段类型
     */
    type: string;
  };
}
export interface UpdateFieldRequest {
  fieldId: string;
  /**
   * 表单字段
   */
  body: {
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  };
}
export interface UpdateFieldResponse {
  body: {
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 是否是必须的字段
     */
    required: boolean;
    /**
     * 字段类型
     */
    type: string;
  };
}
export interface DeleteFieldRequest {
  fieldId: string;
}
export interface GetCountOfAnswersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _group?: ("category" | "createAt" | "field" | "inspector" | "respondent" | "sheet" | "value")[];
    categories?: string[];
    createAt_lt?: string;
    createAt_gt?: string;
    inspectors?: string[];
    respondents?: string[];
    ns?: string[];
    values?: string[];
  };
}
export interface GetCountOfAnswersResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * 所属分类
     */
    category?: {
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    };
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 字段 id
     */
    field?: string;
    /**
     * 调查者
     */
    inspector?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 所属表单
     */
    sheet?: {
      /**
       * 关闭时间
       */
      closeAt?: Date;
      /**
       * 描述
       */
      description?: string;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * logo
       */
      logo?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 拥有者
       */
      owner?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 别名
       */
      slug?: string;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录说明等
       */
      summary?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段
       */
      fields: ({
        /**
         * 表单字段的默认值
         */
        defaultValue?: {
          [k: string]: any;
        };
        /**
         * 字段描述
         */
        description?: string;
        /**
         * 是否是模板
         */
        isTemplate?: boolean;
        /**
         * 字段 key
         */
        key?: string;
        /**
         * 表单字段标题
         */
        title?: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 字段校验规则
         */
        rules?: {}[];
        /**
         * 字段类型
         */
        type?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 字段所属分类数组，最顶层在第一个元素
         */
        categories: ({
          /**
           * 描述
           */
          description?: string;
          /**
           * 标题
           */
          title?: string;
          /**
           * 父类别
           */
          parent?: string;
        } & {
          /**
           * mongodb id
           */
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 标题
           */
          title: string;
        })[];
        /**
         * 表单字段标题
         */
        title: string;
        /**
         * 是否是必须的字段
         */
        required: boolean;
        /**
         * 字段类型
         */
        type: string;
      })[];
      /**
       * 标签
       */
      labels: string[];
      /**
       * 名称
       */
      name: string;
      refs: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
      /**
       * 拥有者
       */
      owner: string;
    };
    value?: any;
    /**
     * 计数
     */
    count?: number;
  }[];
}
export interface GetCountOfSheetsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _group?: ("createAt" | "label" | "industry" | "ns")[];
    createAt_lt?: string;
    createAt_gt?: string;
    labels?: string[];
    state?: "OPEN" | "CLOSED";
  };
}
export interface GetCountOfSheetsResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 标签
     */
    label?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 计数
     */
    count?: number;
  }[];
}
export interface GetCountOfPaperworksRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _group?: ("createAt" | "inspector" | "ns" | "respondent" | "sheet")[];
    createAt_lt?: string;
    createAt_gt?: string;
    inspectors?: string[];
    respondents?: string[];
    sheets?: string[];
    ns?: string[];
  };
}
export interface GetCountOfPaperworksResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 调查者
     */
    inspector?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 被调查人
     */
    respondent?: string;
    /**
     * 所属表单
     */
    sheet?: {
      /**
       * 关闭时间
       */
      closeAt?: Date;
      /**
       * 描述
       */
      description?: string;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * logo
       */
      logo?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 拥有者
       */
      owner?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 别名
       */
      slug?: string;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录说明等
       */
      summary?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段
       */
      fields: ({
        /**
         * 表单字段的默认值
         */
        defaultValue?: {
          [k: string]: any;
        };
        /**
         * 字段描述
         */
        description?: string;
        /**
         * 是否是模板
         */
        isTemplate?: boolean;
        /**
         * 字段 key
         */
        key?: string;
        /**
         * 表单字段标题
         */
        title?: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 字段校验规则
         */
        rules?: {}[];
        /**
         * 字段类型
         */
        type?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 字段所属分类数组，最顶层在第一个元素
         */
        categories: ({
          /**
           * 描述
           */
          description?: string;
          /**
           * 标题
           */
          title?: string;
          /**
           * 父类别
           */
          parent?: string;
        } & {
          /**
           * mongodb id
           */
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 标题
           */
          title: string;
        })[];
        /**
         * 表单字段标题
         */
        title: string;
        /**
         * 是否是必须的字段
         */
        required: boolean;
        /**
         * 字段类型
         */
        type: string;
      })[];
      /**
       * 标签
       */
      labels: string[];
      /**
       * 名称
       */
      name: string;
      refs: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
      /**
       * 拥有者
       */
      owner: string;
    };
    /**
     * 计数
     */
    count?: number;
  }[];
}
export type DateTime = Date;

/**
 * mongodb id
 */
export type MongoId = string;

export interface AnyValue {
  [k: string]: any;
}

export type State = "OPEN" | "CLOSED";

export type AnswerCountGroup =
  | "category"
  | "createAt"
  | "field"
  | "inspector"
  | "respondent"
  | "sheet"
  | "value";

export type PaperworkCountGroup = "createAt" | "inspector" | "ns" | "respondent" | "sheet";

export type SheetCountGroup = "createAt" | "label" | "industry" | "ns";

/**
 * Group of date
 */
export interface GroupDate {
  /**
   * day of date
   */
  day?: string;
  /**
   * week of date
   */
  week?: string;
  /**
   * month of date
   */
  month?: string;
  /**
   * year of date
   */
  year?: string;
}

/**
 * 第三方资源关联
 */
export interface Reference {
  /**
   * 资源在第三方的 origin id
   */
  oid: string;
  /**
   * 来源
   */
  source: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 唯一地址
   */
  uri?: string;
}

/**
 * 表单 Doc
 */
export interface SheetDoc {
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * 描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * logo
   */
  logo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 拥有者
   */
  owner?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 别名
   */
  slug?: string;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录说明等
   */
  summary?: string;
}

/**
 * 表单创建文档
 */
export type SheetCreateDoc = {
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * 描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * logo
   */
  logo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 拥有者
   */
  owner?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 别名
   */
  slug?: string;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录说明等
   */
  summary?: string;
} & {
  /**
   * 字段
   */
  fields: string[];
  /**
   * 名称
   */
  name: string;
  /**
   * 拥有者
   */
  owner: string;
};

/**
 * 表单
 */
export type Sheet = {
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * 描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * logo
   */
  logo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 拥有者
   */
  owner?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 别名
   */
  slug?: string;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录说明等
   */
  summary?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 字段
   */
  fields: ({
    /**
     * 表单字段的默认值
     */
    defaultValue?: {
      [k: string]: any;
    };
    /**
     * 字段描述
     */
    description?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title?: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 字段校验规则
     */
    rules?: {}[];
    /**
     * 字段类型
     */
    type?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类数组，最顶层在第一个元素
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 是否是必须的字段
     */
    required: boolean;
    /**
     * 字段类型
     */
    type: string;
  })[];
  /**
   * 标签
   */
  labels: string[];
  /**
   * 名称
   */
  name: string;
  refs: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 状态
   */
  state: "OPEN" | "CLOSED";
  /**
   * 拥有者
   */
  owner: string;
};

/**
 * 类别 Doc
 */
export interface CategoryDoc {
  /**
   * 描述
   */
  description?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 父类别
   */
  parent?: string;
}

export type CategoryCreateDoc = {
  /**
   * 描述
   */
  description?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 父类别
   */
  parent?: string;
} & {
  /**
   * 标题
   */
  title: string;
};

/**
 * 类别
 */
export type Category = {
  /**
   * 描述
   */
  description?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 父类别
   */
  parent?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 标题
   */
  title: string;
};

/**
 * 表单字段
 */
export interface FieldDoc {
  /**
   * 表单字段的默认值
   */
  defaultValue?: {
    [k: string]: any;
  };
  /**
   * 字段描述
   */
  description?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title?: string;
  /**
   * 字段的占位字符
   */
  placeholder?: string;
  /**
   * 是否是必须的字段
   */
  required?: boolean;
  /**
   * 字段校验规则
   */
  rules?: {}[];
  /**
   * 字段类型
   */
  type?: string;
}

export type FieldCreateDoc = {
  /**
   * 表单字段的默认值
   */
  defaultValue?: {
    [k: string]: any;
  };
  /**
   * 字段描述
   */
  description?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title?: string;
  /**
   * 字段的占位字符
   */
  placeholder?: string;
  /**
   * 是否是必须的字段
   */
  required?: boolean;
  /**
   * 字段校验规则
   */
  rules?: {}[];
  /**
   * 字段类型
   */
  type?: string;
} & {
  /**
   * 字段所属分类数组，最顶层在第一个元素
   */
  categories?: string[];
  /**
   * 表单字段标题
   */
  title: string;
  /**
   * 字段类型
   */
  type: string;
};

export type Field = {
  /**
   * 表单字段的默认值
   */
  defaultValue?: {
    [k: string]: any;
  };
  /**
   * 字段描述
   */
  description?: string;
  /**
   * 是否是模板
   */
  isTemplate?: boolean;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title?: string;
  /**
   * 字段的占位字符
   */
  placeholder?: string;
  /**
   * 是否是必须的字段
   */
  required?: boolean;
  /**
   * 字段校验规则
   */
  rules?: {}[];
  /**
   * 字段类型
   */
  type?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 字段所属分类数组，最顶层在第一个元素
   */
  categories: ({
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  })[];
  /**
   * 表单字段标题
   */
  title: string;
  /**
   * 是否是必须的字段
   */
  required: boolean;
  /**
   * 字段类型
   */
  type: string;
};

/**
 * 回答
 */
export interface AnswerDoc {
  /**
   * 字段 id
   */
  field: string;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 值
   */
  value: {
    [k: string]: any;
  };
}

export type AnswerCreateDoc = {
  /**
   * 字段 id
   */
  field: string;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 值
   */
  value: {
    [k: string]: any;
  };
} & {
  /**
   * 答案所属分类，["第一层分类id", "第二层分类id"]
   */
  categories?: string[];
};

export type Answer = {
  /**
   * 字段 id
   */
  field: string;
  /**
   * 字段 key
   */
  key?: string;
  /**
   * 表单字段标题
   */
  title: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 值
   */
  value: {
    [k: string]: any;
  };
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 字段所属分类，[{第一层分类}, {第二层分类}]
   */
  categories: ({
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  })[];
};

/**
 * 填表结果
 */
export interface PaperworkDoc {
  /**
   * 答案
   */
  answers?: ({
    /**
     * 字段 id
     */
    field: string;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 值
     */
    value: {
      [k: string]: any;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类，[{第一层分类}, {第二层分类}]
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
  })[];
  /**
   * 描述
   */
  description?: string;
  /**
   * 调查者，可以能有多人
   */
  inspectors?: string[];
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 被调查人
   */
  respondent?: string;
  /**
   * 得分
   */
  score?: number;
}

export type PaperworkCreateDoc = {
  /**
   * 答案
   */
  answers?: ({
    /**
     * 字段 id
     */
    field: string;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 值
     */
    value: {
      [k: string]: any;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类，[{第一层分类}, {第二层分类}]
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
  })[];
  /**
   * 描述
   */
  description?: string;
  /**
   * 调查者，可以能有多人
   */
  inspectors?: string[];
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 被调查人
   */
  respondent?: string;
  /**
   * 得分
   */
  score?: number;
} & {
  /**
   * 答案
   */
  answers: ({
    /**
     * 字段 id
     */
    field: string;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 值
     */
    value: {
      [k: string]: any;
    };
  } & {
    /**
     * 答案所属分类，["第一层分类id", "第二层分类id"]
     */
    categories?: string[];
  })[];
  /**
   * 调查者，可以能有多人
   */
  inspectors: string[];
};

export type Paperwork = {
  /**
   * 答案
   */
  answers?: ({
    /**
     * 字段 id
     */
    field: string;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 值
     */
    value: {
      [k: string]: any;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类，[{第一层分类}, {第二层分类}]
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
  })[];
  /**
   * 描述
   */
  description?: string;
  /**
   * 调查者，可以能有多人
   */
  inspectors?: string[];
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 被调查人
   */
  respondent?: string;
  /**
   * 得分
   */
  score?: number;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 答案
   */
  answers: ({
    /**
     * 字段 id
     */
    field: string;
    /**
     * 字段 key
     */
    key?: string;
    /**
     * 表单字段标题
     */
    title: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 值
     */
    value: {
      [k: string]: any;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段所属分类，[{第一层分类}, {第二层分类}]
     */
    categories: ({
      /**
       * 描述
       */
      description?: string;
      /**
       * 标题
       */
      title?: string;
      /**
       * 父类别
       */
      parent?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 标题
       */
      title: string;
    })[];
  })[];
  /**
   * 调查者，可以能有多人
   */
  inspectors: string[];
};

/**
 * Count of answer aggregation
 */
export interface AnswersCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * 所属分类
   */
  category?: {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 父类别
     */
    parent?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 标题
     */
    title: string;
  };
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 字段 id
   */
  field?: string;
  /**
   * 调查者
   */
  inspector?: string;
  /**
   * 被调查人
   */
  respondent?: string;
  /**
   * 所属表单
   */
  sheet?: {
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  };
  value?: any;
  /**
   * 计数
   */
  count?: number;
}

/**
 * Count of sheet aggregation
 */
export interface SheetsCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 标签
   */
  label?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 计数
   */
  count?: number;
}

/**
 * Count of paperwork aggregation
 */
export interface PaperworksCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 调查者
   */
  inspector?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 被调查人
   */
  respondent?: string;
  /**
   * 所属表单
   */
  sheet?: {
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * 描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 是否是模板
     */
    isTemplate?: boolean;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * logo
     */
    logo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 拥有者
     */
    owner?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 别名
     */
    slug?: string;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录说明等
     */
    summary?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 字段
     */
    fields: ({
      /**
       * 表单字段的默认值
       */
      defaultValue?: {
        [k: string]: any;
      };
      /**
       * 字段描述
       */
      description?: string;
      /**
       * 是否是模板
       */
      isTemplate?: boolean;
      /**
       * 字段 key
       */
      key?: string;
      /**
       * 表单字段标题
       */
      title?: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 字段校验规则
       */
      rules?: {}[];
      /**
       * 字段类型
       */
      type?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 字段所属分类数组，最顶层在第一个元素
       */
      categories: ({
        /**
         * 描述
         */
        description?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 父类别
         */
        parent?: string;
      } & {
        /**
         * mongodb id
         */
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 标题
         */
        title: string;
      })[];
      /**
       * 表单字段标题
       */
      title: string;
      /**
       * 是否是必须的字段
       */
      required: boolean;
      /**
       * 字段类型
       */
      type: string;
    })[];
    /**
     * 标签
     */
    labels: string[];
    /**
     * 名称
     */
    name: string;
    refs: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 拥有者
     */
    owner: string;
  };
  /**
   * 计数
   */
  count?: number;
}

export interface MongoDefault {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
