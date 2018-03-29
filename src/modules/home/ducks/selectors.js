import { createSelector } from 'reselect';

export const getWritingModels = state => state.writingModels;
export const getSubjectAreas = state => state.subjectAreas;
export const getSections = state => state.sections;
export const getMoves = state => state.moves;
export const getSteps = state => state.steps;
export const getMarkers = state => state.markers;
export const getMdCodes = state => state.mdCodes;
export const getMdSubCodes = state => state.mdSubCodes;
export const getMdMarkers = state => state.mdMarkers;
export const getSentences = state => state.sentences;
export const getDocument = state => state.document;
export const getWritingModelId = state => state.writingModelId;
export const getSubjectAreaId = state => state.subjectAreaId;
export const getSectionId = state => state.sectionId;
export const getCurrentMoveId = state => state.currentMoveId;
export const getCurrentStepId = state => state.currentStepId;
export const getCurrentMarkerId = state => state.currentMarkerId;
export const getPopUpActive = state => state.popUpActive;
export const getAnalysis = state => state.analysis;
export const getAnalysisSentenceId = state => state.analysisSentenceId;
export const getAnalysisFlag = state => state.analysisFlag;
export const getGuideFlag = state => state.guideFlag;
export const getRightPanelTab = state => state.rightPanelTab;
