package com.toudeuk.server.domain.game.dto;

import static com.toudeuk.server.domain.game.entity.RewardType.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.toudeuk.server.domain.game.entity.RewardType;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;



public class GameData {

    @Data
    public static class DisplayInfoForClicker {

        @JsonSerialize(using = LocalDateTimeSerializer.class)
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime coolTime;
        private String status;
        private Integer myRank;
        private Integer myClickCount;
        private RewardType rewardType;

        public static DisplayInfoForClicker of(
            LocalDateTime coolTime,
            String status,
            Integer myRank,
            Integer myClickCount,
            RewardType rewardType) {
            DisplayInfoForClicker displayInfo = new DisplayInfoForClicker();
            displayInfo.coolTime = coolTime;
            displayInfo.status = status;
            displayInfo.myRank = myRank;
            displayInfo.myClickCount = myClickCount;
            displayInfo.rewardType = rewardType;
            return displayInfo;
        }

        public static DisplayInfoForClicker of(
            DisplayInfoForEvery displayInfoForEvery,
            Integer myRank,
            Integer myClickCount,
            RewardType rewardType) {
            DisplayInfoForClicker displayInfo = new DisplayInfoForClicker();
            displayInfo.coolTime = displayInfoForEvery.getCoolTime();
            displayInfo.status = displayInfoForEvery.getStatus();
            displayInfo.myRank = myRank;
            displayInfo.myClickCount = myClickCount;
            displayInfo.rewardType = rewardType;
            return displayInfo;
        }

        public static GameData.DisplayInfoForClicker getDisplayInfoForClickerAtRunning(GameData.DisplayInfoForEvery displayInfoEvery, Integer myRank, Integer myClickCount, RewardType rewardType) {
            return GameData.DisplayInfoForClicker.of(
                displayInfoEvery,
                myRank,
                myClickCount,
                rewardType
            );
        }

        public static GameData.DisplayInfoForClicker getDisplayInfoForClickerAtCoolTime(GameData.DisplayInfoForEvery displayInfoEvery) {
            return getDisplayInfoForClickerAtRunning(displayInfoEvery, 0, 0, NONE);
        }


    }

    @Data
    public static class DisplayInfoForEvery {

        @JsonSerialize(using = LocalDateTimeSerializer.class)
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime coolTime;
        private String status;
        private Integer totalClick;
        private String latestClicker;
        private List<RankData.UserScore> rank;

        public static GameData.DisplayInfoForEvery of(
            LocalDateTime coolTime,
            String status,
            Integer totalClick,
            String latestClicker,
            List<RankData.UserScore> rank) {
            GameData.DisplayInfoForEvery displayInfo = new GameData.DisplayInfoForEvery();
            displayInfo.coolTime = coolTime;
            displayInfo.status = status;
            displayInfo.latestClicker = latestClicker;
            displayInfo.totalClick = totalClick;
            displayInfo.rank = rank;
            return displayInfo;
        }


        public static GameData.DisplayInfoForEvery getDisplayInfoForEveryAtRunning(Integer totalClick, String latestClicker, List<RankData.UserScore> rankingList) {
            return GameData.DisplayInfoForEvery.of(
                null,
                GameStatus.RUNNING.toString(),
                totalClick,
                latestClicker,
                rankingList
            );
        }

        public static GameData.DisplayInfoForEvery getDisplayInfoEveryAtCoolTime(LocalDateTime gameCoolTime) {
            return GameData.DisplayInfoForEvery.of(
                gameCoolTime,
                GameStatus.COOLTIME.toString(),
                0,
                "NONE",
                new ArrayList<>()
            );
        }


    }

    enum GameStatus {
        COOLTIME, RUNNING;
    }

}
