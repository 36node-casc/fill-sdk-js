//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * sheet's methods
   */
  sheet = {
    /**
     * List sheets
     *
     * @param {ListSheetsRequest} req listSheets request
     * @returns {Promise<ListSheetsResponse>} A paged array of sheets
     */
    listSheets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/sheets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a sheet
     *
     * @param {CreateSheetRequest} req createSheet request
     * @returns {Promise<CreateSheetResponse>} The sheet created
     */
    createSheet: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createSheet");

      return fetch(`${this.base}/sheets`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find sheet by id
     *
     * @param {GetSheetRequest} req getSheet request
     * @returns {Promise<GetSheetResponse>} Expected response to a valid request
     */
    getSheet: req => {
      const { sheetId } = req || {};

      if (!sheetId) throw new Error("sheetId is required for getSheet");

      return fetch(`${this.base}/sheets/${sheetId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update sheet
     *
     * @param {UpdateSheetRequest} req updateSheet request
     * @returns {Promise<UpdateSheetResponse>} The sheet
     */
    updateSheet: req => {
      const { sheetId, body } = req || {};

      if (!sheetId) throw new Error("sheetId is required for updateSheet");
      if (!body) throw new Error("requetBody is required for updateSheet");

      return fetch(`${this.base}/sheets/${sheetId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete sheet
     *
     * @param {DeleteSheetRequest} req deleteSheet request
     */
    deleteSheet: req => {
      const { sheetId } = req || {};

      if (!sheetId) throw new Error("sheetId is required for deleteSheet");

      return fetch(`${this.base}/sheets/${sheetId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List paperworks
     *
     * @param {ListPaperworksRequest} req listPaperworks request
     * @returns {Promise<ListPaperworksResponse>} A paged array of sheets
     */
    listPaperworks: req => {
      const { sheetId, query } = req || {};

      if (!sheetId) throw new Error("sheetId is required for listPaperworks");

      return fetch(`${this.base}/sheets/${sheetId}/paperworks`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Add paperwork for sheet
     *
     * @param {AddPaperworkRequest} req addPaperwork request
     * @returns {Promise<AddPaperworkResponse>} The paperwork
     */
    addPaperwork: req => {
      const { sheetId, body } = req || {};

      if (!sheetId) throw new Error("sheetId is required for addPaperwork");
      if (!body) throw new Error("requetBody is required for addPaperwork");

      return fetch(`${this.base}/sheets/${sheetId}/paperworks`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find paperwork by id
     *
     * @param {GetPaperworkRequest} req getPaperwork request
     * @returns {Promise<GetPaperworkResponse>} The paperwork
     */
    getPaperwork: req => {
      const { sheetId, paperworkId } = req || {};

      if (!sheetId) throw new Error("sheetId is required for getPaperwork");
      if (!paperworkId)
        throw new Error("paperworkId is required for getPaperwork");

      return fetch(`${this.base}/sheets/${sheetId}/paperworks/${paperworkId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Remove a paperwork
     *
     * @param {RemovePaperworkRequest} req removePaperwork request
     */
    removePaperwork: req => {
      const { sheetId, paperworkId } = req || {};

      if (!sheetId) throw new Error("sheetId is required for removePaperwork");
      if (!paperworkId)
        throw new Error("paperworkId is required for removePaperwork");

      return fetch(`${this.base}/sheets/${sheetId}/paperworks/${paperworkId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * category's methods
   */
  category = {
    /**
     * List categories
     *
     * @param {ListCategoriesRequest} req listCategories request
     * @returns {Promise<ListCategoriesResponse>} A paged array of categories
     */
    listCategories: req => {
      const { query } = req || {};

      return fetch(`${this.base}/categories`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a category
     *
     * @param {CreateCategoryRequest} req createCategory request
     * @returns {Promise<CreateCategoryResponse>} The category created
     */
    createCategory: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createCategory");

      return fetch(`${this.base}/categories`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find category by id
     *
     * @param {GetCategoryRequest} req getCategory request
     * @returns {Promise<GetCategoryResponse>} Expected response to a valid request
     */
    getCategory: req => {
      const { categoryId } = req || {};

      if (!categoryId)
        throw new Error("categoryId is required for getCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update category
     *
     * @param {UpdateCategoryRequest} req updateCategory request
     * @returns {Promise<UpdateCategoryResponse>} The category
     */
    updateCategory: req => {
      const { categoryId, body } = req || {};

      if (!categoryId)
        throw new Error("categoryId is required for updateCategory");
      if (!body) throw new Error("requetBody is required for updateCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete category
     *
     * @param {DeleteCategoryRequest} req deleteCategory request
     */
    deleteCategory: req => {
      const { categoryId } = req || {};

      if (!categoryId)
        throw new Error("categoryId is required for deleteCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * field's methods
   */
  field = {
    /**
     * List public fields
     *
     * @param {ListFieldsRequest} req listFields request
     * @returns {Promise<ListFieldsResponse>} A paged array of fields
     */
    listFields: req => {
      const { query } = req || {};

      return fetch(`${this.base}/fields`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a field
     *
     * @param {CreateFieldRequest} req createField request
     * @returns {Promise<CreateFieldResponse>} The field created
     */
    createField: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createField");

      return fetch(`${this.base}/fields`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find field by id
     *
     * @param {GetFieldRequest} req getField request
     * @returns {Promise<GetFieldResponse>} Expected response to a valid request
     */
    getField: req => {
      const { fieldId } = req || {};

      if (!fieldId) throw new Error("fieldId is required for getField");

      return fetch(`${this.base}/fields/${fieldId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update field
     *
     * @param {UpdateFieldRequest} req updateField request
     * @returns {Promise<UpdateFieldResponse>} The field
     */
    updateField: req => {
      const { fieldId, body } = req || {};

      if (!fieldId) throw new Error("fieldId is required for updateField");
      if (!body) throw new Error("requetBody is required for updateField");

      return fetch(`${this.base}/fields/${fieldId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete field
     *
     * @param {DeleteFieldRequest} req deleteField request
     */
    deleteField: req => {
      const { fieldId } = req || {};

      if (!fieldId) throw new Error("fieldId is required for deleteField");

      return fetch(`${this.base}/fields/${fieldId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * audit's methods
   */
  audit = {
    /**
     * List audit records
     *
     * @param {ListRecordsRequest} req listRecords request
     * @returns {Promise<ListRecordsResponse>} A paged array of audit records
     */
    listRecords: req => {
      const { query } = req || {};

      return fetch(`${this.base}/audit/records`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a audit record
     *
     * @param {CreateRecordRequest} req createRecord request
     * @returns {Promise<CreateRecordResponse>} The audit record created
     */
    createRecord: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRecord");

      return fetch(`${this.base}/audit/records`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * counts's methods
   */
  counts = {
    /**
     * CountAnswers
     *
     * @param {GetCountOfAnswersRequest} req getCountOfAnswers request
     * @returns {Promise<GetCountOfAnswersResponse>} Expected response to a valid request
     */
    getCountOfAnswers: req => {
      const { query } = req || {};

      return fetch(`${this.base}/counts/answers`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * CountSheets
     *
     * @param {GetCountOfSheetsRequest} req getCountOfSheets request
     * @returns {Promise<GetCountOfSheetsResponse>} Expected response to a valid request
     */
    getCountOfSheets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/counts/sheets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * CountPaperworks
     *
     * @param {GetCountOfPaperworksRequest} req getCountOfPaperworks request
     * @returns {Promise<GetCountOfPaperworksResponse>} Expected response to a valid request
     */
    getCountOfPaperworks: req => {
      const { query } = req || {};

      return fetch(`${this.base}/counts/paperworks`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
}
